import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { useState } from 'react'

function App() {
  const [load,SetLoad] = useState(true)

  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      SetLoad(false);
    }, 2000);
  }

  return (
    
    ! load && (
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    )
    
  )
}

export default App
