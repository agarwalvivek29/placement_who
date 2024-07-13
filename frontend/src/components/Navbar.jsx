import React from 'react';
import { SignInButton, useAuth, SignOutButton } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem', 
      backgroundColor: 'green',
      color: 'white' 
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        GoFood
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        {isSignedIn ? (
          <>
          <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              My Orders
            </button>

            <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              My Cart
            </button>
          <SignOutButton>
            <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              Logout
            </button>
            
          </SignOutButton>
          </>
          
        ) : (
          <SignInButton>
            <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;