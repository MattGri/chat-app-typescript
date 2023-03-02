import React from 'react';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-gray-100 border relative">
        <Navbar />
      </section>
    </div>
  );
}

export default App;
