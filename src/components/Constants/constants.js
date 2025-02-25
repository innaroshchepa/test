const USERS_ENDPOINTS = {
  signUp: '/v1/auth/register',
  signIn: '/v1/auth/login',
  logout: '/v1/auth/logout',
  refresh: '/v1/auth/refresh',
};

const AXIOS = {
  baseURL: 'https://waterwise-backend.onrender.com',
};

const WATER_ENDPOINTS = {
  water: '/v1/water/',
  daily: '/v1/water/daily',
  monthly: '/v1/water/monthly',
};

const CONSTANTS = {
  USERS_ENDPOINTS,
  AXIOS,
  WATER_ENDPOINTS
};
export default CONSTANTS;
