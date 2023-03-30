import axiosInstance from './getToken/json';

export const getUserTweets = async userId => {
  try {
    const { status, data } = await axiosInstance.get(`/users/${userId}/tweets`);
    if (status === 200) return { status: 'success', data };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const getUserReplyTweets = async userId => {
  try {
    const { status, data } = await axiosInstance.get(`/users/${userId}/replied_tweets`);
    if (status === 200) return { status: 'success', data };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const getUserLikes = async userId => {
  try {
    const { status, data } = await axiosInstance.get(`/users/${userId}/likes`);
    if (status === 200) return { status: 'success', data };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const getUserFollowers = async userId => {
  try {
    const { status, data } = await axiosInstance.get(`/users/${userId}/followers`);
    if (status === 200) return data;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};

export const getUserFollowings = async userId => {
  try {
    const { status, data } = await axiosInstance.get(`/users/${userId}/followings`);
    if (status === 200) return data;
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 404) return { status: 'error', message };
    if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
  }
};
