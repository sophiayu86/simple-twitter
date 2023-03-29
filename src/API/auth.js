import axios from 'axios';
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

export const login = async ({ account, password }) => {
  try {
    const { status, data } = await axiosInstance.post('/user/signin', {
      account,
      password
    });
    const { token } = data;
    if (status === 200 && token) return { status: 'success', message: '登入成功，正在前往首頁...', data: data };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const adminLogin = async ({ account, password }) => {
  try {
    const { status, data } = await axiosInstance.post('/admin/signin', {
      account,
      password
    });
    const { token } = data;
    if (status === 200 && token) {
      return { status: 'success', message: '登入成功，正在前往後台首頁...', data };
    }
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { status } = await axiosInstance.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    });
    if (status === 200) return { status: 'success', message: '註冊成功，正在導向登入頁...' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
export const getUserTweets = async (userID) => {
  try {
    const res = await axiosInstance.get(`/users/${userID}/tweets`);
    return res;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: "error", message };
    if (status === 500)
      return { status: "error", message: "伺服器錯誤，連線中斷" };
  }
};
export const getAllReplies = async (tweetID) => {
  try {
    const res = await axiosInstance.get(`tweets/${tweetID}/replies`);
    return res;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: "error", message };
    if (status === 500)
      return { status: "error", message: "伺服器錯誤，連線中斷" };
  }
};

export const getUser = async (userID) => {
  try {
    const res = await axiosInstance.get(`/users/${userID}`);
    return res;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: "error", message };
    if (status === 500)
      return { status: "error", message: "伺服器錯誤，連線中斷" };
  }
};

export const getTweet = async (tweetID) => {
  try {
    const res = await axiosInstance.get(`/tweets/${tweetID}`);
    return res;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: "error", message };
    if (status === 500)
      return { status: "error", message: "伺服器錯誤，連線中斷" };
  }
};