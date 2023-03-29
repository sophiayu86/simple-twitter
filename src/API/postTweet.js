import axiosInstance from './getToken/json';

export const postTweet = async ({ description }) => {
  try {
    const { status } = await axiosInstance.post('/tweets', { description });
    if (status === 200) return { status: 'success', message: '推文成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
