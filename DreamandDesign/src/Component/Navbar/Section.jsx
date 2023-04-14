import React from 'react'
import "./Navbar.css";
const Section = () => {
  return (
    <div>
         <section className="hero-section">
        <div className='welcome'>Welcome To </div>
       {/*  <img className='sec1img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s'></img> */}
        <div className='dreamanddesign'><span className='dr'>DREAM</span> <span className='and'>&</span> <span className='de'>DESIGN</span> </div>
        <p  className='psec'>one stop solution to all your needs </p>
      </section> 
    </div>
  )
}

export default Section
