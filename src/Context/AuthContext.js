import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import axiosInstance from '../API/getToken/json';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('jwt-token');
      const tempPayload = jwt_decode(token);
      if (tempPayload) {
        setIsAuthenticated(true);
        setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
        localStorage.removeItem('jwt-token');
        return; //倒去login
      }
    };
    checkTokenIsValid();
  }, []);

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
