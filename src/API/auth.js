import axios from 'axios';

// const authURL = "https://ac-twitter-12345.herokuapp.com";
const authURL = 'http://localhost:3000/api';

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/user/signin`, {
      account,
      password
    });

    const { token } = data;

    if (token) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error('[登入失敗！細節如下：]:', error);
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
