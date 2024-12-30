import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom';

const Testimonails = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-16 lg:px-32 w-full overflow-hidden' id='Testimonails'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
      Announcement<span className='underline underline-offset-4 decoration-1 under font-light'> to Students</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>2025 නවක සිසුන් බදවා ගැනීම
      </p>

      {/* Go back to Home button positioned at the top-right corner */}
      <div className='absolute right-0 top-0 p-4 py-8'>
        <Link to="/" className='bg-blue-500 px-8 py-3 rounded'>Go back to Home</Link>
      </div>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
            <img className='w-100 h-100 mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonails
