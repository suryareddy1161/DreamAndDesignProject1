import React from 'react'
import Aboutus from '../Component/Aboutus/Aboutus'
import Clints from '../Component/Clints/Clints'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import Section from '../Component/Navbar/Section'
import Servicesour from '../Component/Servicesour/Servicesour'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Servicesour/>
      <Clints/>
       <Aboutus/> 
      <Footer/>
    </div>
  )
}

export default Home
