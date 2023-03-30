import axiosInstance from './getToken/json';

export const addLike = async teeetId => {
  try {
    const { status } = await axiosInstance.post(`/tweets/${teeetId}/like`);
    if (status === 200) return { status: 'success', message: '按讚成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const removeLike = async teeetId => {
  try {
    const { status } = await axiosInstance.post(`/tweets/${teeetId}/unlike`);
    if (status === 200) return { status: 'success', message: '取消按讚成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
