import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'><h1>bienvenue dans notre université</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea ducimus esse veniam, quo mollitia 
        sint ipsam nemo suscipit odit illum repudiandae dolorem? Sit reiciendis, laudantium dicta tempora sunt aspernatur!</p>
        <button className='btn'>Explore more <img src={dark_arrow } alt="" className='img1'/></button>
      </div>
    </div>
  )
}

export default Hero
