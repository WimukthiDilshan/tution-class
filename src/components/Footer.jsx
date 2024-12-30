import React from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
           <img src={assets.log} alt="" className='w-20 h-20 rounded-xl ' />
          <p className='text-gray-400 mt-4 italic font-semibold'>ICT වංශකතාවේ නොමැකෙන
          සලකුණ</p>
          <p className='text-white mt-4 text-4xl  font-semibold'>
          දිල්මි ඉමේෂා

</p>

          <p className='text-gray-400 text-sm px-11 '>National Dip. in Teaching (ICT)</p>
          
          
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
           
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Me</a>
            <a href="#Contact" className='hover:text-white'>Register</a>
            <a href="#" className='hover:text-white'>Privacy policy</a>
          </ul>
        </div>
        {/*<div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Contact with Us</h3>
          <p className='text-gray-400 mb-4 max-w-80'>lates news articles nwheufhwhf uhwehewejqwd oihidejwfj</p>
          <div className='flex gap-2'>
            <input 
              type="email" 
              placeholder='Enter Your Email'
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto' 
            />
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
          </div>
        </div>*/}
        <div className='w-full md:w-1/5 flex flex-col items-start md:items-end'>
          <h3 className='text-white text-lg font-bold mb-4 px-4'>Contact Us</h3>
          <div className='flex gap-4'>
            <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href='https://wa.me/' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024@ Dilmi Imesha. All rights Reserved.Developed by Wimukthi
      </div>
    </div>
  );
};

export default Footer;
