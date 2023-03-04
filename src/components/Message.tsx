import React from 'react';
import { auth } from '../firebase';

interface Props {
  message: any;
}

const Message = ({ message }: Props) => {
  const messageClass = auth.currentUser.uid ? 'bg-green-500' : 'bg-gray-500';

  return (
    <div>
      <div
        className={`flex flex-col p-3 rounded-lg ${messageClass} text-white`}
      >
        <p className="absolute mt-[-50px] text-gray-600 text-xs">
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
