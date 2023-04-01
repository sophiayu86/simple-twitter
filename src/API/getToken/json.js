import axios from 'axios';
import HttpStatus from 'http-status-codes';
let jwtToken = '';
const axiosInstance = axios.create({
  baseURL: 'https://ac-twitter-12345.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtToken}`
  },
  timeout: 20000
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (jwtToken === '') {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt-token')}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === HttpStatus.UNAUTHORIZED) {
      window.location.href = window.location.origin + 'login';
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;
