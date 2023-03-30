import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import axiosInstance from '../API/getToken/json';
import { getOneUser } from '../API/getOneUser';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const [render, setRender] = useState(0);
  const [signinUser, setSigninUser] = useState(null);
  const handleContextRender = () => {
    setRender(prev => (prev += 1));
  };

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('jwt-token');
      const tempPayload = jwt_decode(token);
      if (tempPayload) {
        setIsAuthenticated(true);
        setPayload(tempPayload);
        const { data } = await getOneUser(tempPayload.id);
        if (data) {
          const { id, account, name, email, avatar, cover, introduction } = data;
          setSigninUser(prev => ({ ...prev, id, account, name, email, avatar, cover, introduction }));
        }
      } else {
        setIsAuthenticated(false);
        setPayload(null);
        localStorage.removeItem('jwt-token');
        return; //倒去login
      }
    };
    checkTokenIsValid();
  }, [render]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload && {
          id: payload.id,
          avatar: payload.avatar,
          cover: payload.cover,
          account: payload.account,
          name: payload.name,
          introduction: payload.introduction,
          email: payload.email,
          iat: payload.iat,
          exp: payload.exp
        },
        signinUser: signinUser && {
          id: signinUser.id,
          avatar: signinUser.avatar,
          cover: signinUser.cover,
          account: signinUser.account,
          name: signinUser.name,
          introduction: signinUser.introduction,
          email: signinUser.email
        },
        handleContextRender,
        userLogin: async ({ account, password }) => {
          try {
            const { data } = await axiosInstance.post('/user/signin', {
              account,
              password
            });
            const { token } = data;
            const tempPayload = jwt_decode(token);
            if (tempPayload) {
              setPayload(tempPayload);
              setIsAuthenticated(true);
              localStorage.setItem('jwt-token', token);
              return { status: 'success', message: '登入成功，正在前往首頁...' };
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
          } catch (error) {
            const { status } = error.response;
            const { message } = error.response.data;
            if (status === 404) return { status: 'error', message };
            if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
          }
        },
        adminLogin: async ({ account, password }) => {
          try {
            const { data } = await axiosInstance.post('/admin/signin', {
              account,
              password
            });
            const { token } = data;
            const tempPayload = jwt_decode(token);
            if (tempPayload) {
              setPayload(tempPayload);
              setIsAuthenticated(true);
              localStorage.setItem('jwt-token', token);
              return { status: 'success', message: '登入成功，正在前往後台首頁...' };
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
          } catch (error) {
            const { status } = error.response;
            const { message } = error.response.data;
            if (status === 404) return { status: 'error', message };
            if (status === 500) return { status: 'error', message: '伺服器錯誤，連線中斷' };
          }
        },
        logout: () => {
          localStorage.removeItem('jwt-token');
          setPayload(null);
          setIsAuthenticated(false);
          return { status: 200 };
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};
