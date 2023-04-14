import React from 'react'
import './Aboutmain.css'
import Me from "../../assets/me4.png"
const Aboutusmain = () => {
  return (
    <>
     <h1 className='project-heading'>About Us</h1>
    <section className='aboutmain'>
        <div className='aboutcontent'>
        <img className='imgmainabout' src={Me}></img>
            <div className='abouttext'> 
               
            {/*     <div className="left">
  <h1 className='name1'>Karthik Reddy</h1>
  <div ><p className='founder'>Founder, Dream & Design</p></div>
  <div ><p className='founder1'>Vfx Artist</p></div>
  <div className='name'>
  <h1 className='name'>Meet</h1>
        <h1 className='name'>The</h1>
        <h1 className='name'>Founder</h1>
  </div>
      
      
  </div> */}
  <div className='writingcontent'>
    <div className='name2'><p>Karthik Reddy</p></div>
    <div className='founder2'>Founder of Dream And Design</div>
    
    <div className='founder3'>Vfx Artist, Graphic Designer</div>
    <div className='founder3'>Phography, Branding</div>

  </div>
                {/* <h5>Marketing</h5> */}
             {/*  */}  {/*  <p>We are one of the best multimedia company in ballari that provide services of Brand promotions, Digital marketing ,Advertising, Graphic Design, wedding Planning, Event Management in fact one-stop-solution to all your needs

                </p> */}
                {/* <div><p>We are cost effective , but not cheap, for us what matters first is the quality of work we deliver. We are passionate in doing satisfactory and productive work by providing fast,reliable and accurate Work. </p></div>
                */} {/* <div><p>Our company has managed all types of multi media works . Nothing is small are big for us because we manage every work with the same dedication, integrity and passion</p></div>
              */}  <a href='https://api.whatsapp.com/send/?phone=918317320962&text=HELLO'> <button className='chatbth'>CHAT</button></a>
            </div>
   

        </div>
    </section>
    </>
  )
}

export default Aboutusmain
