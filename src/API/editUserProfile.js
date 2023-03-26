import axios from 'axios';
const authURL = 'https://ac-twitter-12345.herokuapp.com/api';
// const authURL = 'http://localhost:3000/api';
const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoidXNlcjEiLCJhY2NvdW50IjoidXNlcjEiLCJhdmF0YXIiOiJodHRwczovL2xvcmVtZmxpY2tyLmNvbS8zNjAvMzYwL2NhdHM_bG9jaz0yOTU1OCIsImNvdmVyIjpudWxsLCJpbnRyb2R1Y3Rpb24iOiJleGVyY2l0YXRpb25lbSBjb25zZWN0ZXR1ciBpbnZlbnRvcmUgbnVsbGEgdXQiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjZUMDc6MDQ6MjguMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjZUMDc6MDQ6MjguMDAwWiIsImlhdCI6MTY3OTgxNDMwNSwiZXhwIjoxNjc5OTAwNzA1fQ.7qRh-FaDraJ88TFshMnprE13eOWA-I1tJZ6-Qr856-Q';
export const editUserProfile = async ({ id, formData }) => {
  try {
    const data = await axios.put(`${authURL}/users/${id}`, formData, {
      headers: {
        authorization: 'Bearer ' + authToken,
        'Content-Type': 'multipart/form-data'
      }
    });
    if (data?.status === 200) return { status: 'success', message: '檔案更新成功' };
  } catch (error) {
    const { status } = error?.response;
    const { message } = error?.response?.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'warning', message: '伺服器錯誤，連線中斷' };
  }
};
