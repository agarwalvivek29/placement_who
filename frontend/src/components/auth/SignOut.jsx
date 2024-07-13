import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const SignOutComponent = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutComponent;