import React, { createContext, useContext } from 'react';
import { useClerk, useUser } from '@clerk/clerk-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { signOut } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <AuthContext.Provider value={{ user, isSignedIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);