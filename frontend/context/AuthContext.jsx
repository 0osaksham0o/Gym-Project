// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the application
export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  // Function to log in (simulating with fetch)
  const login = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);  // Persist the username
  };

  // Function to log out
  const logout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
