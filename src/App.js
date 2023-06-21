import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './Contact';
import Login from './components/Login';
import About from './About';



function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/admin')
    .then(res=>res.json())
    .then(data => setData(data))
    .then(err => console.log(err))
  },[])
  return (
   <>
   {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={<Layout />}/>
          <Route path='/login' element={<Login />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          
        
      </Routes>
    {/* </BrowserRouter> */}
   
<Footer />
</>
  )
}

export default App