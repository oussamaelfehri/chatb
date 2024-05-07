import React, { useState }  from 'react';
import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import { useSelector } from "react-redux";
import 'react-chatbot-kit/build/main.css';
import { Link } from 'react-router-dom';
import ChatPage from './ChatPage';





function App() {
  const page3 = useSelector((state) => state.counter.page3)

  const [enroll, setEnroll] = useState(false);

  function handleChange(){
    setEnroll(true)
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ChatPage' element={<ChatPage />} />
        </Routes>
       
    
   
  
    <br/>  <br/>  <br/>  <br/> <Footer />
      </Router>
    </>
  );
}

export default App; // Assurez-vous que cette ligne existe pour exporter par défaut le composant App


