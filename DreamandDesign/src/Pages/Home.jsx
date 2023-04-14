import React from 'react'
import Aboutus from '../Component/Aboutus/Aboutus'
import Clints from '../Component/Clints/Clints'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import Section from '../Component/Navbar/Section'
import Servicesour from '../Component/Servicesour/Servicesour'
import Services from './Services'
import {Helmet} from 'react-helmet'
import Priceing from '../Component/Priceing/Pricing'
import Aboutus1 from '../Component/Aboutus/Aboutus1'
import Aboutusmain from '../Component/Aboutusmain/Aboutusmain'
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>dream and design</title>
        <meta name='keywords' content='marketing'/>
        <meta name="description" content='marketing branding'/>
      </Helmet>
      <Navbar/>
      <Section/>
      <Servicesour/>
      <Priceing/>
      <Clints/>
      <Aboutusmain/>
       {/*  <Aboutus/>   */}
       {/* <Aboutus1/> */}
      <Footer/>
    </div>
  )
}

export default Home
