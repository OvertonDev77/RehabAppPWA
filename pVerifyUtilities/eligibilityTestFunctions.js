const { PrismaClient } = require("@prisma/client");
const {
  pVerifyAxiosTest,
  pVerifyAxiosProduction,
  makeApiCall,
  getToken,
  getTokenSimple,
} = require("./axiosConfig");
const { PATIENT_DATA, REHAB_NPI } = require("./pVerifyConstants");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();
const POLLING_INTERVAL = 5000;
const MAX_POLLING_ATTEMPTS = 12;
const RESULTS_DIR = path.join(process.cwd(), "eligibility-results");

async function runEasyEligibilityCheck(useTestEnvironment = false) {
  try {
    // Choose which axios instance to use
    const axiosInstance = useTestEnvironment
      ? pVerifyAxiosTest
      : pVerifyAxiosProduction;

    const providerData = await prisma.allRehabs.findFirst({
      where: { npi: REHAB_NPI },
    });

    if (!providerData) {
      throw new Error(`Provider not found with NPI: ${REHAB_NPI}`);
    }

    const requestBody = {
      payerCode: "00192", // UHC payer code
      provider_lastname: providerData.provider_last_name || "test",
      provider_npi: REHAB_NPI,
      Provider_PIN: "00000",
      memberID: PATIENT_DATA.memberId,
      patient_DOB: PATIENT_DATA.dob,
      patient_first: PATIENT_DATA.firstName,
      patient_last: PATIENT_DATA.lastName,
      date_Of_Service: "02/14/2024",
      serviceCodes: "30",
      referenceId: "TEST_" + Date.now(),
      location: `${providerData.city || ""} ${providerData.state || ""}`.trim(),
      InternalId: "",
      CustomerID: "",
    };

    console.log(
      "Easy Eligibility Request Payload:",
      JSON.stringify(requestBody, null, 2)
    );

    const response = await makeApiCall(
      axiosInstance,
      "post",
      "/EasyEligibility",
      requestBody
    );

    // Save the response to a file
    if (!fs.existsSync(RESULTS_DIR)) {
      fs.mkdirSync(RESULTS_DIR, { recursive: true });
    }
    fs.writeFileSync(
      path.join(RESULTS_DIR, `easy-eligibility-${Date.now()}.json`),
      JSON.stringify(response, null, 2)
    );

    console.log(
      "Easy Eligibility Response:",
      JSON.stringify(response, null, 2)
    );
    return response;
  } catch (error) {
    console.error("Error in runEasyEligibilityCheck:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function saveRequestId(requestId) {
  try {
    if (!fs.existsSync(RESULTS_DIR)) {
      fs.mkdirSync(RESULTS_DIR, { recursive: true });
    }
    fs.writeFileSync(
      path.join(RESULTS_DIR, "last-request-id.txt"),
      requestId.toString()
    );
    console.log(`Request ID ${requestId} saved successfully`);
  } catch (error) {
    console.error("Error saving request ID:", error);
  }
}

async function submitEligibilitySummary(
  env = "production",
  pVerifyAxios = pVerifyAxiosTest
) {
  try {
    // Get token and set header
    const tokenResponse = await getToken(env);
    const token = tokenResponse.access_token;
    pVerifyAxiosTest.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;

    // Get rehab data
    const rehabData = await prisma.allRehabs.findFirst({
      where: { npi: REHAB_NPI },
    });
    if (!rehabData) throw new Error("Rehab provider not found");

    const requestBody = {
      payerCode: "00192",
      payerName: "UHC",
      provider: {
        lastName: rehabData.provider_last_name || "test",
        npi: REHAB_NPI,
        pin: "00000",
      },
      subscriber: {
        firstName: PATIENT_DATA.firstName,
        lastName: PATIENT_DATA.lastName,
        memberId: PATIENT_DATA.memberId,
        dob: PATIENT_DATA.dob,
      },
      isSubscriberPatient: true,
      doS_StartDate: "02/14/2024",
      doS_EndDate: "02/14/2024",
      practiceTypeCode: "12",
      includeTextResponse: true,
      referenceId: "TEST_" + Date.now(),
      location: `${rehabData.city || ""} ${rehabData.state || ""}`.trim(),
    };

    console.log(
      "Submitting eligibility request with body:",
      JSON.stringify(requestBody, null, 2)
    );
    const response = await makeApiCall(
      pVerifyAxios,
      "post",
      "/EligibilitySummary",
      requestBody
    );

    if (response.RequestID) {
      console.log("FULL RESPONSE\n\n", response);

      console.log("-------------------------------------------");

      console.log("RequestID: ", response.RequestID);
      await saveRequestId(response.RequestID);
      return response;
    } else {
      throw new Error("No RequestID received in response");
    }
  } catch (error) {
    console.error("Error submitting eligibility request:", error);
    throw error;
  }
}

async function pollEligibilityResults(requestId) {
  let attempts = 0;
  async function poll() {
    try {
      const response = await makeApiCall(
        pVerifyAxiosTest,
        "get",
        `/GetEligibilitySummary/${requestId}`
      );
      console.log(
        `Polling attempt ${attempts + 1}, Status: ${response.APIResponseCode}`
      );
      if (response.APIResponseCode === "0") {
        return response;
      } else if (response.APIResponseCode === "1") {
        throw new Error(`Request rejected: ${response.APIResponseMessage}`);
      } else if (attempts >= MAX_POLLING_ATTEMPTS) {
        throw new Error("Maximum polling attempts reached");
      }
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, POLLING_INTERVAL));
      return poll();
    } catch (error) {
      console.error("Error polling eligibility results:", error);
      throw error;
    }
  }
  return poll();
}

async function runEligibilityCheck() {
  try {
    const submitResponse = await submitEligibilitySummary();
    console.log("Initial response:", JSON.stringify(submitResponse, null, 2));
    if (submitResponse.RequestID) {
      console.log("Starting polling for results...");
      const finalResults = await pollEligibilityResults(
        submitResponse.RequestID
      );
      if (!fs.existsSync(RESULTS_DIR)) {
        fs.mkdirSync(RESULTS_DIR, { recursive: true });
      }
      fs.writeFileSync(
        path.join(RESULTS_DIR, `eligibility-${submitResponse.RequestID}.json`),
        JSON.stringify(finalResults, null, 2)
      );
      console.log("Final results saved to file");
      return finalResults;
    }
  } catch (error) {
    console.error("Error in eligibility check:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// runEasyEligibilityCheck(true).then((result) => console.log(result));
//? Works Correctly for the easy eligibilty check

async function getEligibilitySummaryWithPolling(
  requestId,
  maxAttempts = 12,
  interval = 5000
) {
  try {
    let attempts = 0;

    const poll = async () => {
      // Get fresh token each time we poll
      const tokenResponse = await getToken("production");
      const token = tokenResponse.access_token;
      pVerifyAxiosTest.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      console.log(
        `\nPolling attempt ${attempts + 1} for RequestID: ${requestId}`
      );

      const response = await makeApiCall(
        pVerifyAxiosTest,
        "get",
        `/GetEligibilitySummary/${requestId}`
      );

      console.log(`APIResponseCode: ${response.APIResponseCode}`);
      console.log(
        `APIResponseMessage: ${response.APIResponseMessage || "No message"}`
      );

      // Check response status
      switch (response.APIResponseCode) {
        case "0": // Processed
          console.log("Request processed successfully");
          // Save successful response
          const fileName = `eligibility-summary-${requestId}-success.json`;
          fs.writeFileSync(
            path.join(RESULTS_DIR, fileName),
            JSON.stringify(response, null, 2)
          );
          return response;

        case "1": // Rejected
          throw new Error(`Request rejected: ${response.APIResponseMessage}`);

        case "3": // Pending
        case "4": // New
          if (attempts >= maxAttempts) {
            throw new Error(
              `Maximum polling attempts (${maxAttempts}) reached`
            );
          }
          console.log("Request pending, waiting to retry...");
          attempts++;
          await new Promise((resolve) => setTimeout(resolve, interval));
          return poll();

        default:
          throw new Error(
            `Unexpected APIResponseCode: ${response.APIResponseCode}`
          );
      }
    };

    return await poll();
  } catch (error) {
    console.error("Error in getEligibilitySummaryWithPolling:", error);
    throw error;
  }
}

submitEligibilitySummary(
  (env = "production"),
  (pVerifyAxios = pVerifyAxiosProduction)
).then((result) => console.log(result));

module.exports = {
  runEligibilityCheck,
  pollEligibilityResults,
  submitEligibilitySummary,
  runEasyEligibilityCheck,
};
