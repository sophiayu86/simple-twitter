import axiosInstance from './getToken/json';

export const deleteTweet = async id => {
  try {
    const { status } = await axiosInstance.delete(`/admin/tweets/${id}`);
    if (status === 200) return { status: 'success', message: '刪除成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 401) return { status: 'error', message };
    if (status === 403) return { status: 'error', message };
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
