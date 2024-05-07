// ChatbotPage.js

import React from 'react';
import { useSelector } from "react-redux";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/messageParsers";
import ActionProvider from "./chatbot/actionProvider";
import 'react-chatbot-kit/build/main.css';
import Final from "./chatbot/Final";

function ChatbotPage() {
  const page3 = useSelector((state) => state.counter.page3);

  return (
    <div className="App">
      {page3 ? <Final /> : 
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      }
    </div>
  );
}

export default ChatbotPage;
