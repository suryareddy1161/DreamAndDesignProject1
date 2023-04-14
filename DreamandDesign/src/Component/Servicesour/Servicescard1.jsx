import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Services.css"
const Services1 = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <div className="card">
      <div className="front"></div>
      <div className="back">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Services1