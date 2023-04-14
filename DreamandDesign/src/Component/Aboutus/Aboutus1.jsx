import React from 'react'
import Me from "../../assets/me.jpg"
import './Aboutus1.css'

const Aboutus1 = () => {
    return (
        <div className='about-us'>
            <div className='container-about-us'>
                <div className='row'>
                    <div className='flex'>
                        <h2>About Us</h2>
                        <p>We are one of the best multimedia company in ballari that provide services of Brand promotions, Digital marketing ,Advertising, Graphic Design, wedding Planning, Event Management in fact one-stop-solution to all your needs

                        </p>
                        <div><p>We are cost effective , but not cheap, for us what matters first is the quality of work we deliver. We are passionate in doing satisfactory and productive work by providing fast,reliable and accurate Work. </p></div>
                        <div><p>Our company has managed all types of multi media works . Nothing is small are big for us because we manage every work with the same dedication, integrity and passion</p></div>
                    </div>
                    
                    <div className='flex1'>
                    <img className='myimage' src={Me}></img>
                    
                    </div>
                    <a href='' className='chatbtn'>Chat</a>

                </div>
            </div>
        </div>
    )
}

export default Aboutus1
