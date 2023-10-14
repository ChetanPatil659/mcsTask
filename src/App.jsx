import { useState } from 'react'
import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Join from './components/Join'
import Navbar from './components/navbar/Navbar'
import Ca from './components/Ca/Ca'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
            <Routes>
              <Route path='/' Component={Hero}/>
              <Route path='/search' Component={Ca}/>
            </Routes>
      
      <Footer/>
    </>
  )
}

export default App



