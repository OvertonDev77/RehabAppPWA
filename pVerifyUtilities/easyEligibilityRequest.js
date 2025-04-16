import {
  pVerifyAxiosProduction,
  pVerifyAxiosTest,
  makeApiCall,
} from "./axiosConfig.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function runEasyEligibilityCheck(useTestEnvironment = false) {
  try {
    // Choose which axios instance to use
    const axiosInstance = useTestEnvironment
      ? pVerifyAxiosTest
      : pVerifyAxiosProduction;

    const providerData = await prisma.allRehabs.findFirst({
      where: { npi: "1356994164" },
    });

    if (!providerData) {
      throw new Error("Provider not found with NPI: 1356994164");
    }

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

    // Using the makeApiCall helper function
    const response = await makeApiCall(
      axiosInstance,
      "post",
      "/EasyEligibility",
      requestBody
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

// Run the test - try both production and test environments
async function runTests() {
  try {
    console.log("\n=== Running Production Test ===\n");
    const productionResponse = await runEasyEligibilityCheck(false);
    console.log("Production Test completed successfully");
    console.log(JSON.stringify(productionResponse, null, 2));
  } catch (error) {
    console.error("Test failed:", error);
  }
}

runTests();
