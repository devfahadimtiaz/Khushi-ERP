import React, { createContext } from 'react';

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const role = 'user';
  const authenticated = true;

  return (
    <userContext.Provider value={{ role, authenticated }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
