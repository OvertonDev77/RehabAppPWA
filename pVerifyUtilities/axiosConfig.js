import axios from "axios";
import qs from "qs";

// Constants for API configuration
const API_CREDENTIALS = {
  Client_Id: "523c1e0e-9e04-49a3-853b-c35f310b28d5",
  Client_Secret: "zvl2HyIHwFdglBqYSkVEmyBk8opAYw",
};

const ENDPOINTS = {
  production: {
    base: "https://api.pverify.com/API",
    token: "https://api.pverify.com/Token",
  },
  test: {
    base: "https://api.pverify.com/Test/API",
    token: "https://api.pverify.com/Test/Token",
  },
};

// Enhanced error handler
const handleApiError = (error, context) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(`${context} - Status Code:`, error.response.status);
    console.error(`${context} - Response Data:`, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(`${context} - No response received:`, error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`${context} - Error:`, error.message);
  }
  throw error;
};

// Token generation functions with enhanced error handling
export async function getProductionToken() {
  const data = qs.stringify({
    Client_Id: API_CREDENTIALS.Client_Id,
    Client_Secret: API_CREDENTIALS.Client_Secret,
    grant_type: "client_credentials",
  });

  try {
    const response = await axios({
      method: "post",
      url: ENDPOINTS.production.token,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
    console.log("Production Token Retrieved Successfully");
    return response.data;
  } catch (error) {
    return handleApiError(error, "Production Token Generation Failed");
  }
}

export async function getTestToken() {
  const data = qs.stringify({
    Client_Id: API_CREDENTIALS.Client_Id,
    Client_Secret: API_CREDENTIALS.Client_Secret,
    grant_type: "client_credentials",
  });

  try {
    const response = await axios({
      method: "post",
      url: ENDPOINTS.test.token,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
    console.log("Test Token Retrieved Successfully");
    return response.data;
  } catch (error) {
    return handleApiError(error, "Test Token Generation Failed");
  }
}

// Create axios instances with enhanced error handling
const createAxiosInstance = (baseURL, environment) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Client-API-Id": API_CREDENTIALS.Client_Id,
      "Client-Secret": API_CREDENTIALS.Client_Secret,
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 second timeout
  });

  // Add request interceptor
  instance.interceptors.request.use(
    (config) => {
      console.log(`${environment} Request:`, {
        method: config.method,
        url: config.url,
        headers: config.headers,
      });
      return config;
    },
    (error) => {
      console.error(`${environment} Request Error:`, error);
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  instance.interceptors.response.use(
    (response) => {
      console.log(`${environment} Response Status:`, response.status);
      return response;
    },
    (error) => handleApiError(error, `${environment} Request Failed`)
  );

  return instance;
};

// Create instances for both environments
export const pVerifyAxiosProduction = createAxiosInstance(
  ENDPOINTS.production.base,
  "Production"
);
export const pVerifyAxiosTest = createAxiosInstance(
  ENDPOINTS.test.base,
  "Test"
);

// Export default instance (using production by default)
export default pVerifyAxiosProduction;

// Helper function for making API calls
export async function makeApiCall(instance, method, endpoint, data = null) {
  try {
    const config = {
      method,
      url: endpoint,
    };

    if (data) {
      config.data = data;
    }

    const response = await instance(config);
    return response.data;
  } catch (error) {
    handleApiError(
      error,
      `API Call Failed: ${method.toUpperCase()} ${endpoint}`
    );
  }
}
