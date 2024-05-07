import React from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/messageParsers';
import ActionProvider from '../../chatbot/actionProvider';

export default function ChatPage(){
  return (
    <div className="ChatPage">
      <h1>Chat Page</h1>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

