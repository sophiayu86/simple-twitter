import axios from 'axios';

const authURL = "https://ac-twitter-12345.herokuapp.com/api";

export const login = async ({ account, password }) => {
  try {
    const { status, data } = await axios.post(`${authURL}/user/signin`, {
      account,
      password
    });
    const { token } = data;
    if (status === 200 && token) return { status: 'success', message: '登入成功，正在前往首頁...' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { status } = await axios.post(`${authURL}/users`, {
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
