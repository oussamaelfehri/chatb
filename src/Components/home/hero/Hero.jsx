import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // Changez la vitesse du carrousel selon vos besoins
  };
  function handleClick() {
    const element = document.querySelector('.one');
    element.classList.add('clicked');
  }
  

  return (
    <>
      <section className='hero'>
        <Slider {...settings}>
          
          <div >
            <img src="./Capture2500.PNG" alt="Background 2" />
          </div>
          <div>
            <img src="./Capture.PNG" alt="Background 3" />
          </div>
          <div>
            <img src="./tsswira.png" alt="Background 3" />
          </div>
        </Slider>
        <div className='container'>
          <div className='row'>
            <Heading subtitle="Study in Ibn Zohr " title='Ibn zohr  University' />
            <div className='cadre1'>
            <div className="admission-steps-container">
      <div className="admission-step">
        <div className="step-number">1</div>
        <div className="step-text">Trouvez votre programme</div>
      </div>
      <div className="admission-step">
        <div className="step-number">2</div>
        <div className="step-text">Préparez votre dossier</div>
      </div>
      <div className="admission-step">
        <div className="step-number">3</div>
        <div className="step-text">Déposez votre demande</div>
      </div>
      <div className="admission-step">
        <div className="step-number">4</div>
        <div className="step-text">Faites le suivi de votre demande</div>
      </div>
      <div className="questions">
        <div className="questions-icon">?</div>
        <div className="questions-text"></div>
        <Link to="/ChatPage" className="start-btn">Questions</Link>
      </div>
    </div>
                     </div>
            <div className='one'>
              <button onClick={handleClick}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
