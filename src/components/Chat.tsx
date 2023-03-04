import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import { db } from '../firebase';
import SendMessage from './SendMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      console.log(q);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
