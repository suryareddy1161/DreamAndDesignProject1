import React from 'react'
import Aboutusmain from '../Component/Aboutusmain/Aboutusmain'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import {Helmet} from 'react-helmet'
import Aboutus1 from '../Component/Aboutus/Aboutus1'
const About = () => {
  return (
    <div>
       <Helmet>
        <meta charSet='utf-8' />
        <title>dream and design</title>
        <meta name='keywords' content='marketing'/>
        <meta name="description" content='portfolio'/>
      </Helmet>
      <Navbar/>
      {/* <Aboutusmain/> */}
      <Aboutus1/>
      <Footer/>
    </div>
  )
}

export default About
