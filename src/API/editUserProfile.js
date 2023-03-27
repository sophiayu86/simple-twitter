import axiosInstance from './getToken/multipart';

export const editUserProfile = async ({ id, formData }) => {
  try {
    const data = await axiosInstance.put(`/users/${id}`, formData);
    if (data?.status === 200) return { status: 'success', message: '檔案更新成功' };
  } catch (error) {
    const { status } = error?.response;
    const { message } = error?.response?.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'warning', message: '伺服器錯誤，連線中斷' };
  }
};
