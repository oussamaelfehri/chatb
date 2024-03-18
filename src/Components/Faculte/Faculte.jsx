import React from 'react'
import './Faculte.css'
import gallery_1 from '../../assets/gallery-1.PNG'
import gallery_2 from '../../assets/gallery-2.PNG'
import gallery_3 from '../../assets/gallery-3.PNG'
import gallery_4 from '../../assets/gallery-4.PNG'


const Faculte =()=>{
    return(
        <div className="faculte">
        <div className="gallery">
          <img src={gallery_1} alt="" /> 
          <img src={gallery_2} alt="" /> 
          <img src={gallery_3} alt="" /> 
          <img src={gallery_4} alt="" /> 
        </div>
        <button className='btn1'>See more here </button>
 
        </div>
    )
}
export default Faculte