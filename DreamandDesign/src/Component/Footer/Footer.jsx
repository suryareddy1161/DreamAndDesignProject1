import React from 'react'
import "./Footer.css"
import {  FaHome, FaInstagram,  FaMailBulk, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaPhone,  FaWhatsapp } from "react-icons/fa"

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            
            <div>
                <h1>Contact Us</h1>
                <p>Click On Icons To Reach There.</p>
            </div>
           
           {/*  <div className='email'>
            <h4></h4>
            </div> */}
        </div>
        <div className='right'>
  {/*           <h4>About the company</h4>
            <p>This is . I enjoy discussing new projects and design challenges.</p><br></br> */}
           
            <div className='social'>
            <a href='tel: 83173209048'><FaPhone size={20} style={{ color:"#1EA362" ,marginRight:"2rem"}}/>
            {/* 91-83173209048 */}</a>
            <a href='http://maps.google.com/?q=Housing+Board+Colony,+Indira+Nagar,+Ballari,+Karnataka' target="_blank"><FaMapMarkerAlt  size={30} style={{ color:"#960A0A", marginRight:"1rem"}}/></a>
            <a href='https://api.whatsapp.com/send/?phone=918317320962&text=HELLO' target="_blank"><FaWhatsapp  size={30} style={{ color:"#25D366", marginRight:"1rem"}}/></a>
            <a href='https://www.instagram.com/dreamanddesign_official/?igshid=YmMyMTA2M2Y%3D' target="_blank" className='insta'><FaInstagram  size={30} style={{ color:"#E4405F" , marginRight:"1rem"}}/></a>
            <a href='mailto: karthikkeeru71@gmail.com' ><FaMailBulk  size={20} style={{ color:"#a4eaf0", marginRight:"2rem"}}/>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
