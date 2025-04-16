import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getPverifyToken() {
  const url = "https://api.pverify.com/Token";
  const params = new URLSearchParams();

  params.append("Client_Id", "523c1e0e-9e04-49a3-853b-c35f310b28d5");
  params.append("Client_Secret", "zvl2HyIHwFdglBqYSkVEmyBk8opAYw");
  params.append("grant_type", "client_credentials");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("PVerify Token: Data\n", data);
    return data; // Token object including `access_token`
  } catch (error) {
    console.error("Error fetching pVerify token:", error);
    return null;
  }
}

const API_BASE_URL = "https://api.pverify.com/Test/api";

/**
 * Step 1: Submit an Eligibility Inquiry
 * @param {Object} eligibilityData - The request payload
 * @returns {Promise<string>} - Returns Eligibility Request ID
 */
export async function submitEligibilityInquiry(eligibilityData) {
  try {
    const tokenData = await getPverifyToken();
    if (!tokenData?.access_token) {
      throw new Error("Failed to retrieve pVerify token.");
    }

    console.log("Using ClientUserID:", tokenData.ClientUserID);
    console.log("Token:", tokenData.access_token);

    const response = await fetch(`${API_BASE_URL}/EligibilitySummary`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Client-API-Id": `${tokenData.ClientUserID}`, // Changed to use ClientUserID
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payerCode: eligibilityData.payerCode,
        payerName: eligibilityData.payerName,
        provider: {
          firstName: eligibilityData.provider.firstName,
          middleName: eligibilityData.provider.middleName,
          lastName: eligibilityData.provider.lastName,
          npi: eligibilityData.provider.npi,
          pin: eligibilityData.provider.pin,
        },
        subscriber: {
          firstName: eligibilityData.subscriber.firstName,
          dob: eligibilityData.subscriber.dob,
          lastName: eligibilityData.subscriber.lastName,
          memberID: eligibilityData.subscriber.memberID,
        },
        dependent: null,
        isSubscriberPatient: "True",
        doS_StartDate: eligibilityData.doS_StartDate,
        doS_EndDate: eligibilityData.doS_EndDate,
        PracticeTypeCode: eligibilityData.PracticeTypeCode,
        referenceId: eligibilityData.referenceId,
        Location: eligibilityData.Location,
        IncludeTextResponse: eligibilityData.IncludeTextResponse,
        InternalId: "",
        CustomerID: "",
      }),
    });

    const data = await response.json();
    console.log("Raw API Response:", data);

    if (!response.ok || data.APIResponseCode !== "0") {
      console.error("Full error details:", data);
      throw new Error(
        data.APIResponseMessage ||
          data.message ||
          "Error submitting eligibility inquiry."
      );
    }

    console.log("Eligibility Inquiry Submitted:", data);
    return data.RequestID;
  } catch (error) {
    console.error("Error in submitEligibilityInquiry:", error.message);
    throw error;
  }
}

/**
 * Step 2: Retrieve the Eligibility Response using ElgRequestID
 * @param {string} requestId - The Eligibility Request ID from Step 1
 * @returns {Promise<Object>} - Returns the final eligibility response
 */
export async function getEligibilityResponse(requestId) {
  try {
    const tokenData = await getPverifyToken();
    if (!tokenData?.access_token) {
      throw new Error("Failed to retrieve pVerify token.");
    }

    const response = await fetch(
      `${API_BASE_URL}/GetEligibilitySummary/${requestId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Client-API-Id": `${tokenData.ClientUserID}`, // Changed to use ClientUserID
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Raw Response Data:", data);

    if (!response.ok) {
      console.error("Full error details:", data);
      throw new Error(
        data.APIResponseMessage ||
          data.message ||
          "Error fetching eligibility response."
      );
    }

    return data;
  } catch (error) {
    console.error("Error in getEligibilityResponse:", error.message);
    throw error;
  }
}

export async function runTestEligibilityCheck() {
  try {
    const providerData = await prisma.allRehabs.findFirst({
      where: { npi: "1356994164" },
    });

    if (!providerData) {
      throw new Error("Provider not found with NPI: 1356994164");
    }

    const eligibilityRequest = {
      payerCode: "00192",
      payerName: "UHC",
      provider: {
        firstName: providerData.provider_first_name || "",
        middleName: "",
        lastName: providerData.provider_last_name || "",
        npi: "1356994164",
        pin: "00000",
      },
      subscriber: {
        firstName: "John",
        middleName: "Overton",
        lastName: "Bell",
        dob: "10/08/1993",
        memberID: "124753247",
      },
      dependent: null,
      isSubscriberPatient: "True",
      doS_StartDate: "02/14/2024",
      doS_EndDate: "02/14/2024",
      PracticeTypeCode: "3",
      referenceId: "TEST_" + Date.now(),
      Location:
        `${providerData.city ? providerData.city : ""} ${
          providerData.state ? providerData.state : ""
        }` | "",
      IncludeTextResponse: "true",
      InternalId: "",
      CustomerID: "",
    };

    console.log(
      "Request Payload:",
      JSON.stringify(eligibilityRequest, null, 2)
    );

    const requestId = await submitEligibilityInquiry(eligibilityRequest);
    if (!requestId) {
      throw new Error("Failed to get eligibility request ID");
    }

    console.log("Got request ID:", requestId);

    // Wait a moment for processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await getEligibilityResponse(requestId);
    if (!response) {
      throw new Error("Failed to get eligibility response");
    }

    return response;
  } catch (error) {
    console.error("Error in runTestEligibilityCheck:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// // Run the test
// runTestEligibilityCheck()
//   .then((response) => {
//     console.log("Test completed successfully");
//     console.log(JSON.stringify(response, null, 2));
//   })
//   .catch((error) => {
//     console.error("Test failed:", error);
//   });

async function runEasyEligibilityCheck() {
  try {
    const providerData = await prisma.allRehabs.findFirst({
      where: { npi: "1356994164" },
    });

    if (!providerData) {
      throw new Error("Provider not found with NPI: 1356994164");
    }

    const headers = new Headers();
    headers.append("Client-API-Id", "523c1e0e-9e04-49a3-853b-c35f310b28d5");
    headers.append("Client-Secret", "zvl2HyIHwFdglBqYSkVEmyBk8opAYw");
    headers.append("Content-Type", "application/json");

    const requestBody = {
      payerCode: "00192", // UHC payer code
      provider_lastname: providerData.provider_last_name || "test",
      provider_npi: "1356994164",
      Provider_PIN: "00000",
      memberID: "124753247",
      patient_DOB: "10/08/1993",
      patient_first: "John",
      patient_last: "Bell",
      date_Of_Service: "02/14/2024",
      serviceCodes: "30",
      referenceId: "TEST_" + Date.now(),
      location: `${providerData.city || ""} ${providerData.state || ""}`.trim(),
      InternalId: "",
      CustomerID: "",
    };

    console.log("Request Payload:", JSON.stringify(requestBody, null, 2));

    const response = await fetch(
      "https://api.pverify.com/API/EasyEligibility",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();
    console.log("Easy Eligibility Response:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("Error in runEasyEligibilityCheck:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Replace the existing test run with the new easy eligibility check
runEasyEligibilityCheck()
  .then((response) => {
    console.log("Test completed successfully");
    console.log(JSON.stringify(response, null, 2));
  })
  .catch((error) => {
    console.error("Test failed:", error);
  });
