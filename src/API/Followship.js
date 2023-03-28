import axiosInstance from './getToken/json';

export const addFollow = async id => {
  try {
    const { status } = await axiosInstance.post('/followships', { id });
    if (status === 200) return { status: 'success', message: '追蹤成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const removeFollow = async id => {
  try {
    const { status } = await axiosInstance.delete(`/followships/${id}`);
    if (status === 200) return { status: 'success', message: '取消追蹤成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
