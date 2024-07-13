import React from 'react';
import { useAuth, SignOutButton } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';



const Home = () => {
  const { isSignedIn } = useAuth();

  

  return (
    <div>
      <Navbar/>
      
     
      
    </div>
  );
};

export default Home;