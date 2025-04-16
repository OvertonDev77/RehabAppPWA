// pVerifyUtilities/eligibilitySummaryRequest.js
import { PrismaClient } from "@prisma/client";
import { pVerifyAxiosTest, getTestToken } from "./axiosConfig.js";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

// Constants
const POLLING_INTERVAL = 5000; // 5 seconds
const MAX_POLLING_ATTEMPTS = 12; // 1 minute total polling time
const RESULTS_DIR = path.join(process.cwd(), "eligibility-results");

// Your specific patient data
const YOUR_PATIENT_DATA = {
  firstName: "John",
  lastName: "Bell",
  memberId: "124753247",
  dob: "10/08/1993",
};

async function saveRequestId(requestId) {
  try {
    await fs.mkdir(RESULTS_DIR, { recursive: true });
    await fs.writeFile(
      path.join(RESULTS_DIR, "last-request-id.txt"),
      requestId.toString()
    );
    console.log(`Request ID ${requestId} saved successfully`);
  } catch (error) {
    console.error("Error saving request ID:", error);
  }
}

async function submitEligibilitySummary(rehabData) {
  try {
    // Get token
    const tokenResponse = await getTestToken();
    const token = tokenResponse.access_token;

    // Set authorization header
    pVerifyAxiosTest.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;

    const requestBody = {
      payerCode: "00192", // UHC payer code
      payerName: "UHC",
      provider: {
        lastName: rehabData.name,
        npi: "1356994164",
        pin: "00000",
      },
      subscriber: {
        firstName: YOUR_PATIENT_DATA.firstName,
        lastName: YOUR_PATIENT_DATA.lastName,
        memberId: YOUR_PATIENT_DATA.memberId,
        dob: YOUR_PATIENT_DATA.dob,
      },
      isSubscriberPatient: true,
      doS_StartDate: "02/14/2024", // Using your specific date
      doS_EndDate: "02/14/2024",
      practiceTypeCode: "12", // Physical Therapy
      includeTextResponse: true,
      referenceId: "TEST_" + Date.now(),
      location: `${rehabData.city || ""} ${rehabData.state || ""}`.trim(),
    };

    console.log(
      "Submitting eligibility request with body:",
      JSON.stringify(requestBody, null, 2)
    );

    const response = await pVerifyAxiosTest.post(
      "/EligibilitySummary",
      requestBody
    );

    if (response.data.RequestID) {
      await saveRequestId(response.data.RequestID);
      return response.data;
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

  const poll = async () => {
    try {
      const response = await pVerifyAxiosTest.get(
        `/GetEligibilitySummary/${requestId}`
      );
      console.log(
        `Polling attempt ${attempts + 1}, Status: ${
          response.data.APIResponseCode
        }`
      );

      // Check if processing is complete
      if (response.data.APIResponseCode === "0") {
        // Processed
        return response.data;
      } else if (response.data.APIResponseCode === "1") {
        // Rejected
        throw new Error(
          `Request rejected: ${response.data.APIResponseMessage}`
        );
      } else if (attempts >= MAX_POLLING_ATTEMPTS) {
        throw new Error("Maximum polling attempts reached");
      }

      // Continue polling
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, POLLING_INTERVAL));
      return poll();
    } catch (error) {
      console.error("Error polling eligibility results:", error);
      throw error;
    }
  };

  return poll();
}

async function runEligibilityCheck() {
  try {
    // Get rehab data from Prisma
    const rehab = await prisma.provider.findFirst({
      where: {
        npi: "1356994164",
      },
    });

    if (!rehab) {
      throw new Error("Rehab provider not found");
    }

    // Submit eligibility request
    console.log("Submitting eligibility request...");
    const submitResponse = await submitEligibilitySummary(rehab);
    console.log("Initial response:", JSON.stringify(submitResponse, null, 2));

    // Begin polling if request was accepted
    if (submitResponse.RequestID) {
      console.log("Starting polling for results...");
      const finalResults = await pollEligibilityResults(
        submitResponse.RequestID
      );

      // Save results to file
      await fs.writeFile(
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

// Export functions for use in other files
export {
  runEligibilityCheck,
  pollEligibilityResults,
  submitEligibilitySummary,
};

// Run if called directly
if (require.main === module) {
  runEligibilityCheck()
    .then((results) => console.log("Eligibility check completed"))
    .catch((error) => console.error("Eligibility check failed:", error));
}
