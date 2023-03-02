import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-gray-800 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </nav>
  );
};

export default Navbar;
