import React from 'react'
import './About.css'
import about_img from '../../assets/about.PNG'
import play_icon from '../../assets/play-icon.PNG'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play_icon' />
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nuturing tomorow leaders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aut quas corrupti ipsa, vero dolores consequuntur doloribus sed quae labore placeat laudantium praesentium maxime, cum impedit
             temporibus nemo blanditiis atque.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum, reprehenderit rem eos at voluptatum facere quam aperiam sequi neque deserunt, libero tenetur earum, inventore recusandae 
                est? Ipsum, voluptas praesentium!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda? Amet, maiores? Iure, ducimus unde aspernatur, enim ea qui quia praesentium id, tenetur nisi aliquid beatae! 
                    Voluptatum debitis impedit ratione!</p>
      </div>
    </div>
  )
}

export default About
