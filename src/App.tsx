import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-gray-100 border relative">
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
