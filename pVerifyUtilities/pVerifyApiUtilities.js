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
    return data; // Token object including `access_token`
  } catch (error) {
    console.error("Error fetching pVerify token:", error);
    return null;
  }
}

const API_BASE_URL = "https://api.pverify.com/Test/API"; // Using the Test Environment

/**
 * Step 1: Submit an Eligibility Inquiry
 * @param {Object} eligibilityData - The request payload
 * @returns {Promise<string>} - Returns Eligibility Request ID
 */
export async function submitEligibilityInquiry(eligibilityData) {
  try {
    const tokenData = await getPverifyToken(); // Get pVerify Token
    if (!tokenData?.access_token)
      throw new Error("Failed to retrieve pVerify token.");

    const response = await fetch(`${API_BASE_URL}/EligibilityInquiry`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Client-API-Id": process.env.PVERIFY_CLIENT_ID, // Store in .env
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eligibilityData),
    });

    const data = await response.json();
    if (!response.ok)
      throw new Error(
        data.verificationMessage || "Error submitting eligibility inquiry."
      );

    console.log("Eligibility Inquiry Submitted:", data);
    return data.ElgRequestID; // Returns the ID needed for Step 2
  } catch (error) {
    console.error("Error in submitEligibilityInquiry:", error.message);
    return null;
  }
}

/**
 * Step 2: Retrieve the Eligibility Response using ElgRequestID
 * @param {string} requestId - The Eligibility Request ID from Step 1
 * @returns {Promise<Object>} - Returns the final eligibility response
 */
export async function getEligibilityResponse(requestId) {
  try {
    const tokenData = await getPverifyToken(); // Get pVerify Token
    if (!tokenData?.access_token)
      throw new Error("Failed to retrieve pVerify token.");

    const response = await fetch(
      `${API_BASE_URL}/GetEligibilityResponse/${requestId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Client-API-Id": process.env.PVERIFY_CLIENT_ID, // Store in .env
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (!response.ok)
      throw new Error(
        data.verificationMessage || "Error fetching eligibility response."
      );

    console.log("Final Eligibility Response:", data);
    return data;
  } catch (error) {
    console.error("Error in getEligibilityResponse:", error.message);
    return null;
  }
}
