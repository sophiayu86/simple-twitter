import axios from 'axios';
const authURL = 'https://ac-twitter-12345.herokuapp.com/api';
// const authURL = 'http://localhost:3000/api';
const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoidXNlcjEiLCJhY2NvdW50IjoidXNlcjEiLCJhdmF0YXIiOiJodHRwczovL2xvcmVtZmxpY2tyLmNvbS8zNjAvMzYwL2NhdHM_bG9jaz0yODI5MyIsImNvdmVyIjpudWxsLCJpbnRyb2R1Y3Rpb24iOiJtYXhpbWUgbmF0dXMgcXVvIGNvbW1vZGkgZXN0Iiwicm9sZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI2VDE2OjMzOjQwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI2VDE2OjMzOjQwLjAwMFoiLCJpYXQiOjE2Nzk4ODg0MjQsImV4cCI6MTY3OTk3NDgyNH0.-jjxGxyRY4Sjv24sx6eCnSLJnapmsfi2lXIrZTFzKbI';

export const postReply = async ({ tweetId, comment }) => {
  try {
    const { status } = await axios.post(
      `${authURL}/tweets/${tweetId}/replies`,
      { comment },
      { headers: { authorization: 'Bearer ' + authToken } }
    );
    if (status === 200) return { status: 'success', message: '回覆成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
