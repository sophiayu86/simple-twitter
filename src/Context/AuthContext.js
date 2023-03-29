import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';

const id = Number(localStorage.getItem('user-id'));
const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState({ id });

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('jwt-token');
      if (authToken) {
        setIsAuthenticated(true);
        const tempPayload = jwt_decode(authToken);
        if (tempPayload) setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
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
          exp: payload.exp
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};
