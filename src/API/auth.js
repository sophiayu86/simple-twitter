import axios from "axios";

const authURL = "https://ac-twitter-12345.herokuapp.com";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/user/signin`, {
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

export const register = async ({
  account,
  username,
  email,
  password,
  checkPassword,
}) => {
  try {
    // const { data } = await axios.post(`${authURL}/register`, {
    //   account,
    //   username,
    //   email,
    //   password,
    //   checkPassword,
    // });
    // const { authToken } = data;

    // if (authToken) {
    //   return { success: true, ...data };
    // }

    const data = await axios.post(`${authURL}/users`, {
      account,
      username,
      email,
      password,
      checkPassword,
    });
    const { account } = data;

    if (account) {
      return { data };
    }

    return data;
  } catch (error) {
    console.error("[註冊失敗]: ", error);
  }
};
