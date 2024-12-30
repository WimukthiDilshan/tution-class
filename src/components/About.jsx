import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x:200 }}
       transition={{duration: 1}}
       whileInView={{opacity: 1,x:0 }}
       viewport={{once:true}}

    
    className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>ME</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>To spark curiosity and inspire growth in every student through creativity and meaningful learning experiences</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img src={assets.about} alt="" className='w-full sm:w-1/2 max-w-lg'/>
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6  md:gap-10 w-full 2xl:pr-28'>
             {/* <div>
                <p className='text-4xl font-medium text-gray-800'>3+</p>
                <p>Government schools</p>
              </div>
              <div>
                <p className='text-4xl font-medium text-gray-800'>450+</p>
                <p>Students</p>
              </div>
              */}

            </div>
            <p className='my-10 max-w-lg'>I am a teacher who teaches ICT subjects for O/L and A/L classes.
               I completed the National Diploma in Teaching ICT at Pasdunrata National College of Education. 
               Currently, I am working as an ICT teacher in a government school. With a passion for technology and education, 
               I strive to inspire and educate my students, preparing them for their future careers in the digital world.</p>
              <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>

          </div>
        </div>
      
    </motion.div>
  )
}

export default About
