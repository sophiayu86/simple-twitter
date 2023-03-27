// import { login, register } from '../apitest/auth';
import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
// import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
//   const { pathname } = useLocation();

  useEffect(() => {
    console.log("authToken");
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('jwt-token');
      console.log(authToken);
      if (authToken) {
       
        setIsAuthenticated(true);
        const tempPayload = jwt_decode(authToken);
        console.log("b",tempPayload);
        setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
        //倒去login
        return;
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
          name: payload.name,
          email: payload.email,
          role: payload.role,
          avatar: payload.avatar,
          createdAt: payload.createdAt,
          updatedAt: payload.updatedAt,
          account: payload.account,
          cover: payload.cover,
          introduction: payload.introduction,
          iat: payload.iat,
          exp: payload.exp,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};