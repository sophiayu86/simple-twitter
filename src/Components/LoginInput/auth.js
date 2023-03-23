import axios from "axios";

const authURL = "https://ac-twitter-12345.herokuapp.com/api/user";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/signin`, {
      account,
      password,
    });

    const { token } = data;

    if (token) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error("[登入失敗！細節如下：]:", error);
  }
};
