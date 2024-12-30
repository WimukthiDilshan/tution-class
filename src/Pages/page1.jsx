import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from 'motion/react-client';
import Footer from '../components/Footer';
import { motion } from 'motion/react'


const Page1 = () => {
  return (
    
    < motion.div 

    initial={{ opacity: 0, x:100 }}
    transition={{duration: 1}}
    whileInView={{opacity: 1,x:0 }}
    viewport={{once:true}}

    
    
    className=' relative flex-shrink-0 w-full bg-gray-900'>
      <h1 className='text-center text-white text-3xl py-8 px-6'>Album</h1>
      <Link to="/" className='absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded'>Go back to Home</Link>
      <div className="grid grid-cols-3 gap-4 h-full px-4">
    <img src="../photos/ph1.jpg" alt="project.title" className='w-full h-full object-cover' />
    <img src="../photos/ph2.jpg" alt="project.title" className='w-full h-full object-cover' />
    <img src="../photos/ph3.jpg" alt="project.title" className='w-full h-full object-cover' />
    
    </div>
  
  
      <Footer></Footer>
      
      
      

      
      
    </motion.div>
  );
};

export default Page1;
