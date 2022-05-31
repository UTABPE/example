import keycloak from 'auth/keycloak';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MODULES_API_GATEWAY_BASE_URL,
});

// insert auth token into headers
axiosInstance.interceptors.request.use(async (reqConfig) => {
  const authToken = keycloak.token;

  if (authToken && reqConfig.headers) {
    reqConfig.headers['Authorization'] = `Bearer ${authToken}`;
  }

  return reqConfig;
});
// catch 401 and refresh the token
axiosInstance.interceptors.response.use((res) => res);

export const api = axiosInstance;
