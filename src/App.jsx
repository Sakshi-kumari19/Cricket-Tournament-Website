import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

import { Toaster } from 'react-hot-toast'
import Tournament from './components/Tournament'
import Stepper from './components/Stepper'






function App() {
  
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Tournament/>
    <Stepper/> 
    <Footer/>
    </div>
    <Toaster />
    
    </>
  )
}

export default App
