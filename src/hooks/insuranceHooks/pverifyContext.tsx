import React, { createContext, useContext, useState, useCallback } from "react";

// --- Types ---
interface EligibilityRequest {
  payerCode: string;
  provider_lastname: string;
  provider_npi: string;
  Provider_PIN: string;
  memberID: string;
  patient_DOB: string;
  patient_first: string;
  patient_last: string;
  date_Of_Service: string;
  serviceCodes: string;
  referenceId: string;
  location?: string;
  InternalId?: string;
  CustomerID?: string;
}

interface EligibilityResult {
  [key: string]: any;
}

interface PVerifyContextType {
  loading: boolean;
  error: string | null;
  result: EligibilityResult | null;
  getToken: () => Promise<string | null>;
  submitEligibility: (request: EligibilityRequest) => Promise<any>;
  pollEligibilityResult: (requestId: string) => Promise<any>;
  reset: () => void;
}

const PVerifyContext = createContext<PVerifyContextType | undefined>(undefined);

export const PVerifyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<EligibilityResult | null>(null);

  // --- API constants ---
  const TEST_BASE = "https://api.pverify.com/Test";
  const TOKEN_URL = "https://api.pverify.com/Token";
  const CLIENT_ID = "523c1e0e-9e04-49a3-853b-c35f310b28d5";
  const CLIENT_SECRET = "zvl2HyIHwFdglBqYSkVEmyBk8opAYw";

  // --- Get Token ---
  const getToken = useCallback(async (): Promise<string | null> => {
    try {
      setError(null);
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
    } catch (err: any) {
      setError(err.message || "Token fetch failed");
      return null;
    }
  }, []);

  // --- Submit Eligibility ---
  const submitEligibility = useCallback(
    async (request: EligibilityRequest) => {
      setLoading(true);
      setError(null);
      setResult(null);
      try {
        const token = await getToken();
        if (!token) throw new Error("No token");
        const response = await fetch(`${TEST_BASE}/EasyEligibility`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(request),
        });
        const data = await response.json();
        if (!response.ok)
          throw new Error(
            data?.APIResponseMessage || "Eligibility request failed"
          );
        setResult(data);
        return data;
      } catch (err: any) {
        setError(err.message || "Eligibility request failed");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getToken]
  );

  // --- Poll for Results ---
  const pollEligibilityResult = useCallback(
    async (requestId: string) => {
      setLoading(true);
      setError(null);
      try {
        const token = await getToken();
        if (!token) throw new Error("No token");
        let attempts = 0;
        const maxAttempts = 12;
        const interval = 5000;
        while (attempts < maxAttempts) {
          const response = await fetch(
            `${TEST_BASE}/GetEligibilitySummary/${requestId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await response.json();
          if (data.APIResponseCode === "0") {
            setResult(data);
            setLoading(false);
            return data;
          } else if (data.APIResponseCode === "1") {
            throw new Error(data.APIResponseMessage || "Request rejected");
          }
          attempts++;
          await new Promise((res) => setTimeout(res, interval));
        }
        throw new Error("Max polling attempts reached");
      } catch (err: any) {
        setError(err.message || "Polling failed");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getToken]
  );

  const reset = useCallback(() => {
    setError(null);
    setResult(null);
    setLoading(false);
  }, []);

  return (
    <PVerifyContext.Provider
      value={{
        loading,
        error,
        result,
        getToken,
        submitEligibility,
        pollEligibilityResult,
        reset,
      }}
    >
      {children}
    </PVerifyContext.Provider>
  );
};

export function usePVerifyContext() {
  const ctx = useContext(PVerifyContext);
  if (!ctx)
    throw new Error("usePVerifyContext must be used within a PVerifyProvider");
  return ctx;
}
