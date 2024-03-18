import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import "./App.css"
import config from "./chatbot/config";
import MessageParser from "./chatbot/messageParsers";
import ActionProvider from "./chatbot/actionProvider";
import { useSelector } from "react-redux";
import Final from "./chatbot/Final";
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero'
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from  "./Components/About/About";
import Faculte from "./Components/Faculte/Faculte";

function App() {
  const page3 = useSelector((state) => state.counter.page3)

  const [enroll, setEnroll] = useState(false);

  function handleChange(){
    setEnroll(true)
  }
  return (

<>

    {enroll ? 
    
    (page3 ? <Final /> : <div className="App">
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  </div>)
    : 
    
    <div  >
       <div class="a"><Navbar/>
          <Hero />
          
          <div className="container">
          <Title subTitle="Oue Prgram" title="what we offer" />
            <Programs />
            <About />
            <Title subTitle="Gallery" title="Université" />
          <Faculte />
            </div>
          
          <div className="enroll">
          <button className="enroll-button" onClick={handleChange}>C'est parti!</button>
         </div>
       </div>
       
           
            
           
      
    </div>}
    </>
  );

}

export default App;
