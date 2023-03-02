import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const LogOut = () => {
  const logOut = () => {
    signOut(auth);
  };

  return (
    <button
      className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
      onClick={logOut}
    >
      Logout
    </button>
  );
};

export default LogOut;
