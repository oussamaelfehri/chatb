import React from "react"
import logo from '../../../assets/logo.png'; // Assurez-vous que le nom correspond au fichier réel
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <img src={logo} alt="Logo" className='logo'/>
            <h1>  </h1>
           
            <span></span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
