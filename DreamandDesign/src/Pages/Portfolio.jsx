import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
/* import Work from '../Component/Work/Work' */
import Footer from '../Component/Footer/Footer'
import Priceing from '../Component/Priceing/Pricing'
import { Helmet } from 'react-helmet'
const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>dream and design</title>
        <meta name='keywords' content='marketing'/>
        <meta name="description" content='portfolio'/>
      </Helmet>
      <Navbar/>
      {/* <Work/> */}
      <Priceing/>
      <Footer/>
    </div>
  )
}

export default Portfolio
