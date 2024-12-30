import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative" 
    style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/background.jpg')"
    }} 
    id="Header">
      <Navbar/>
      <motion.div 
       initial={{ opacity: 0, y:100 }}
       transition={{duration: 1.5}}
       whileInView={{opacity: 1,y:0 }}
       viewport={{once:true}}

      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[92px] inline-block max-w-3xl font-semibold pt-20'>Dilmi Imesha</h2>
        <div>
        <h2 className='text-5xl sm:text-6xl md:text-[42px] inline-block max-w-3xl  pt-7 '>Best ICT Class in Sri Lanka</h2>
        </div>
        
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>Time Table</a>
            <a href="#Contact" className='bg-red-500 px-8 py-3 rounded'>New Student</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
