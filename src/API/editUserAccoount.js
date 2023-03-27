import axiosInstance from './getToken/json';

export const editUserAccoount = async userData => {
  try {
    const { id, ...others } = userData;
    const data = await axiosInstance.put(`/users/${id}/account`, others);
    if (data?.status === 200) return { status: 'success', message: '帳號資訊更新成功' };
  } catch (error) {
    const { status } = error?.response;
    const { message } = error?.response?.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'warning', message: '伺服器錯誤，連線中斷' };
  }
};
