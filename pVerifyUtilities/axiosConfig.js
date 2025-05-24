const axios = require("axios");
const qs = require("qs");
const { ENDPOINTS, API_CREDENTIALS } = require("./pVerifyConstants");

// Enhanced error handler
function handleApiError(error, context) {
  if (error.response) {
    console.error(`${context} - Status Code:`, error.response.status);
    console.error(`${context} - Response Data:`, error.response.data);
  } else if (error.request) {
    console.error(`${context} - No response received:`, error.request);
  } else {
    console.error(`${context} - Error:`, error.message);
  }
  throw error;
}

// Token generation functions
async function getToken(env = "production") {
  const data = qs.stringify({
    Client_Id: API_CREDENTIALS.Client_Id,
    Client_Secret: API_CREDENTIALS.Client_Secret,
    grant_type: "client_credentials",
  });

  try {
    const response = await axios({
      method: "post",
      url: ENDPOINTS[env].token,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
    console.log(`${env} Token Retrieved Successfully`);
    return response.data;
  } catch (error) {
    return handleApiError(error, `${env} Token Generation Failed`);
  }
}

// Axios instance factory
function createAxiosInstance(baseURL, environment) {
  const instance = axios.create({
    baseURL,
    headers: {
      "Client-API-Id": API_CREDENTIALS.Client_Id,
      "Client-Secret": API_CREDENTIALS.Client_Secret,
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

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

  instance.interceptors.response.use(
    (response) => {
      console.log(`${environment} Response Status:`, response.status);
      return response;
    },
    (error) => handleApiError(error, `${environment} Request Failed`)
  );

  return instance;
}

const pVerifyAxiosProduction = createAxiosInstance(
  ENDPOINTS.production.base,
  "Production"
);
const pVerifyAxiosTest = createAxiosInstance(ENDPOINTS.test.base, "Test");

async function makeApiCall(instance, method, endpoint, data = null) {
  try {
    const config = {
      method,
      url: endpoint,
    };
    if (data) config.data = data;
    const response = await instance(config);
    return response.data;
  } catch (error) {
    handleApiError(
      error,
      `API Call Failed: ${method.toUpperCase()} ${endpoint}`
    );
  }
}

async function getTokenSimple(env = "production") {
  const axiosInstance =
    env === "production" ? pVerifyAxiosProduction : pVerifyAxiosTest;

  try {
    const response = await axiosInstance.post("/Token", {
      Client_Id: API_CREDENTIALS.Client_Id,
      Client_Secret: API_CREDENTIALS.Client_Secret,
      grant_type: "client_credentials",
    });

    console.log(`${env} Token Retrieved Successfully (Simple Method)`);
    return response.data.access_token;
  } catch (error) {
    handleApiError(error, `${env} Simple Token Generation Failed`);
  }
}

module.exports = {
  getToken,
  pVerifyAxiosProduction,
  pVerifyAxiosTest,
  makeApiCall,
  getTokenSimple,
};
