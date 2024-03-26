import React from 'react'
import './Textmon.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'






const Textmon = () => {
  return (
    <div>
      <img src={next_icon} alt="" className='naxt-btn'/>
      <img src={back_icon} alt="" className='naxt-btn'/>
      
    </div>
  )
}

export default Textmon
