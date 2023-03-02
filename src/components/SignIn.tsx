import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Signin = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
    console.log(auth);
  };

  return (
    <div className="flex justify-center">
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
};

export default Signin;
