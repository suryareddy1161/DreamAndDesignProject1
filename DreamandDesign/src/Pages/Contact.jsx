import React from 'react'
import ContactForm from '../Component/ContactForm/ContactForm'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import {Helmet} from 'react-helmet'
const Contact = () => {
  return (
    <div>
       <Helmet>
        <meta charSet='utf-8' />
        <title>dream and design</title>
        <meta name='keywords' content='marketing'/>
        <meta name="description" content='portfolio'/>
      </Helmet>
      <Navbar/>
      <ContactForm/>
      {/* <Footer/> */}
    </div>
  )
}

export default Contact
