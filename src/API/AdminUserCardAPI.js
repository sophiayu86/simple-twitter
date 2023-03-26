import axios from "axios";

const authURL = "https://ac-twitter-12345.herokuapp.com/api";
// const authURL = "http://localhost/3000/api";
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJyb290QGV4YW1wbGUuY29tIiwibmFtZSI6InJvb3QiLCJhY2NvdW50Ijoicm9vdCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzM2MC8zNjAvY2F0cz9sb2NrPTkzMjgzIiwiY292ZXIiOm51bGwsImludHJvZHVjdGlvbiI6InF1aXNxdWFtIHRlbXBvcmEgaWxsdW0gdG90YW0gYXQiLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTI2VDA3OjA0OjI4LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTI2VDA3OjA0OjI4LjAwMFoiLCJpYXQiOjE2Nzk4Mjk2NTksImV4cCI6MTY3OTkxNjA1OX0.NnKBhQ2JxdaTPFb76CfXYub29RN8GzQZsbWxx29Di_0";

export const getAdminUserCard = async () => {
  try {
    const res = await axios.get(`${authURL}/admin/users`, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return res.data;
  } catch (error) {
    console.error("取得使用者小卡失敗 ", error);
  }
};
