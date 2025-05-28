// Test script for pVerify EligibilityInquiry and EligibilitySummary (Test environment)
// Run with: node src/hooks/insuranceHooks/testPVerify.js

const fetch = global.fetch || require("node-fetch");
const fs = require("fs");
const path = require("path");

const TOKEN_URL = "https://api.pverify.com/Token";
const TEST_BASE = "https://api.pverify.com/Test/API";
const CLIENT_ID = "523c1e0e-9e04-49a3-853b-c35f310b28d5";
const CLIENT_SECRET = "zvl2HyIHwFdglBqYSkVEmyBk8opAYw";
const REPORTS_DIR = path.join(__dirname, "eligibility-reports");

async function getToken() {
  const params = new URLSearchParams();
  params.append("Client_Id", CLIENT_ID);
  params.append("Client_Secret", CLIENT_SECRET);
  params.append("grant_type", "client_credentials");
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  if (!response.ok) throw new Error(`Token error: ${response.status}`);
  const data = await response.json();
  return data.access_token;
}

function formatReport(data) {
  // Spread out all fields, including nested ones, for readability
  return JSON.stringify(data, null, 2);
}

async function testEligibilityInquiry() {
  const token = await getToken();
  const payload = {
    payerCode: "00192", // UHC
    payerName: "UHC",
    provider: {
      lastName: "TestProvider",
      npi: "1234567890",
      pin: "00000",
    },
    subscriber: {
      firstName: "John",
      lastName: "Doe",
      memberId: "W123456789",
      dob: "01/01/1980",
    },
    isSubscriberPatient: true,
    doS_StartDate: "02/14/2024",
    doS_EndDate: "02/14/2024",
    serviceCodes: ["30"],
    includeTextResponse: true,
    referenceId: "TEST_" + Date.now(),
    location: "Test City ST",
    internalId: "",
    customerId: "",
  };
  const response = await fetch(`${TEST_BASE}/EligibilityInquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Client-API-Id": CLIENT_ID,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("EligibilityInquiry API result:", data);

  // Write report to file
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  const fileName = `eligibility-inquiry-report-${Date.now()}.json`;
  const filePath = path.join(REPORTS_DIR, fileName);
  fs.writeFileSync(filePath, formatReport(data), "utf8");
  console.log(`\nInquiry report written to: ${filePath}`);
}

async function testEligibilitySummary() {
  const token = await getToken();
  const payload = {
    payerCode: "00192", // UHC
    payerName: "UHC",
    provider: {
      lastName: "TestProvider",
      npi: "1234567890",
      pin: "00000",
    },
    subscriber: {
      firstName: "John",
      lastName: "Doe",
      memberId: "W123456789",
      dob: "01/01/1980",
    },
    isSubscriberPatient: true,
    doS_StartDate: "02/14/2024",
    doS_EndDate: "02/14/2024",
    practiceTypeCode: "12", // Physical Therapy
    includeTextResponse: true,
    referenceId: "TEST_" + Date.now(),
    location: "Test City ST",
    internalId: "",
    customerId: "",
  };
  const response = await fetch(`${TEST_BASE}/EligibilitySummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Client-API-Id": CLIENT_ID,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("EligibilitySummary POST result:", data);

  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  const fileName = `eligibility-summary-post-${Date.now()}.json`;
  const filePath = path.join(REPORTS_DIR, fileName);
  fs.writeFileSync(filePath, formatReport(data), "utf8");
  console.log(`\nSummary POST report written to: ${filePath}`);

  // If we get a RequestID, fetch the summary result
  if (data.RequestID) {
    await getEligibilitySummaryResult(token, data.RequestID);
  } else {
    console.log("No RequestID returned from EligibilitySummary POST.");
  }
}

async function getEligibilitySummaryResult(token, requestId) {
  const url = `${TEST_BASE}/GetEligibilitySummary/${requestId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-API-Id": CLIENT_ID,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(
    `EligibilitySummary GET result for RequestID ${requestId}:`,
    data
  );

  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  const fileName = `eligibility-summary-get-${requestId}-${Date.now()}.json`;
  const filePath = path.join(REPORTS_DIR, fileName);
  fs.writeFileSync(filePath, formatReport(data), "utf8");
  console.log(`\nSummary GET report written to: ${filePath}`);
}

// Run both test functions
(async () => {
  await testEligibilityInquiry();
  await testEligibilitySummary();
})();
