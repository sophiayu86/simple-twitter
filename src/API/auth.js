import axios from "axios";

const authURL = "https://ac-twitter-12345.herokuapp.com/api/user";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/signin`, {
      account,
      password,
    });

    const { authToken } = data;

    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};
