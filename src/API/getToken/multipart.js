import axios from 'axios';
let jwtToken = '';
const axiosInstance = axios.create({
  baseURL: 'https://ac-twitter-12345.herokuapp.com/api',
  headers: {
    'Content-Type': 'multipart/form-data',
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

export default axiosInstance;
