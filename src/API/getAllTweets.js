import axiosInstance from './getToken/json';

export const getAllTweets = async () => {
  try {
    const { status, data } = await axiosInstance.get('/tweets');
    if (status === 200) return data;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
