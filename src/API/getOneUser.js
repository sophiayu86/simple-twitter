import axiosInstance from './getToken/json';

export const getOneUser = async userId => {
  try {
    const { status, data } = await axiosInstance.get(`/users/${userId}`);
    if (status === 200) return { status: 'success', data };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
