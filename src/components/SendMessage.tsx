import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../firebase';

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') alert('Please enter a message');
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      uid,
      displayName,
      timestamp: serverTimestamp(),
    });
    setInput('');

    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0"
    >
      <input
        type="text"
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        placeholder="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-green-500 w-[20%]">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
