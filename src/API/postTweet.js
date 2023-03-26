import axios from 'axios';
const authURL = 'https://ac-twitter-12345.herokuapp.com/api';
// const authURL = 'http://localhost:3000/api';
const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoiVGVzdFFRUSIsImFjY291bnQiOiJ1c2VyMSIsImF2YXRhciI6Imh0dHBzOi8vaS5pbWd1ci5jb20vSUhqVjFmbC5qcGVnIiwiY292ZXIiOiJodHRwczovL2kuaW1ndXIuY29tL0dhRmNWeWMuanBlZyIsImludHJvZHVjdGlvbiI6IlRlc3R0ZXN0Iiwicm9sZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI2VDA3OjA0OjI4LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI2VDA3OjA1OjUyLjAwMFoiLCJpYXQiOjE2Nzk4MzU1MjUsImV4cCI6MTY3OTkyMTkyNX0.silVvWZtODMj4r-OqGhPVmIWOJs5J8i2bxBM538NpuI';

export const postTweet = async ({ description }) => {
  try {
    const { status } = await axios.post(`${authURL}/tweets`, { description }, { headers: { authorization: 'Bearer ' + authToken } });
    if (status === 200) return { status: 'success', message: '推文成功' };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
