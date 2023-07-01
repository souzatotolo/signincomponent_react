import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (email, password) => {
    // Perform the authentication logic here
    if (email === 'test@test.com' && password === '123123') {
      setLoggedIn(true);
      console.log('Authentication successful');
    } else {
      setLoggedIn(false);
      throw new Error('Login or password is incorrect');
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
