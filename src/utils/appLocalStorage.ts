const AUTH_TOKEN_KEY = 'EKAP_APP_AUTH_TOKEN';
const REFRESH_TOKEN_KEY = 'EKAP_APP_REFRESH_TOKEN';

const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

const setAuthToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

const setRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

const persistTokens = (tokens: {
  idToken?: string;
  token?: string;
  refreshToken?: string;
}) => {
  if (tokens.token) {
    setAuthToken(tokens.token);
  } else {
    removeAuthToken();
  }

  if (tokens.refreshToken) {
    setRefreshToken(tokens.refreshToken);
  } else {
    removeRefreshToken();
  }
};

export const appLocalStorage = {
  getAuthToken,
  setAuthToken,
  removeAuthToken,

  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,

  persistTokens,
};
