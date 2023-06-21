import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function About() {
  return (
    <>
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <img src="/Amazon_logo.svg" height="100px" width="100px"></img>
    
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    
      <Link class="mr-5 hover:text-yellow-500 text-xl" to="/">Home</Link>
      <Link class="mr-5 hover:text-yellow-500 text-xl" to="/about">About</Link>   
      <Link class="mr-5 hover:text-yellow-500 text-xl" to="/contact">Contact</Link>
      <Link class="mr-5 hover:text-yellow-500 text-xl" to="/login">Login</Link>
      </nav>
    <button class="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0"> <FaSearch />
     
    </button> 
    </div>
    </header> 
    <div>About</div>
    </>
    
  )
}

export default About