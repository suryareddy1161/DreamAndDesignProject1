import React from 'react'
import Me from "../../assets/Me3.png"
import './Aboutus.css'
const Aboutus = () => {
    return (
     
<>
<h1 className='project-heading'>About Us</h1>
        <div className="containerabout">
  <div className="left">
  <h1 className='name1'>Karthik Reddy</h1>
  <div ><p className='founder'>Founder, Dream & Design</p></div>
  <div ><p className='founder1'>Vfx Artist</p></div>
  <div className='name'>
  <h1 className='name'>Meet</h1>
        <h1 className='name'>The</h1>
        <h1 className='name'>Founder</h1>
  </div>
      
      
  </div>
 

  <div className="righttext">
    
      <img alt="Avatar" className='img' src={Me} />
  </div>
</div>
</>
    )
}

export default Aboutus
