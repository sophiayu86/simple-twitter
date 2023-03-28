import { createContext } from 'react';
import { useContext } from 'react';

export const userContext = createContext(null);
export const useUserContext = () => {
  const ctx = useContext(userContext);
  if (ctx === null) {
    throw new Error('useCartContext must be used inside a ContextProvider.');
  }
  return ctx;
};
