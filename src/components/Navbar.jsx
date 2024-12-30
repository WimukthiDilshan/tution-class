import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      
      <div className='container mx-auto flex justify-between items-center py-7 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.log} alt="" className='w-20 h-20 rounded-xl' />
        <ul className='hidden md:flex gap-6 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Time Table</a>
          
          <Link to="/Page1" className='cursor-pointer hover:text-gray-400'>Galary</Link>
          <Link to="/Testimonails" className='cursor-pointer hover:text-gray-400'>Announcements</Link>
          <Link to="/Result" className='cursor-pointer hover:text-gray-400'>Send Result</Link>
        </ul>
        <button className='hidden md:block bg-transparent border border-white text-white px-8 py-2 rounded-full text-center'>
          <div>CONTACT ME</div>
          <div className='text-sm'>(+94)702421501</div>
        </button>
        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer'
          alt="menu icon"
        />
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="close icon" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a href="#Projects" className='px-4 py-2 rounded-full inline-block'>Time Table</a>
          
          <Link to="/Page1" className='px-4 py-2 rounded-full inline-block'>Galary</Link>
          <Link to="/Testimonails" className='cursor-pointer hover:text-gray-400'>News</Link>
          <Link to="/Result" className='cursor-pointer hover:text-gray-400'>Result</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;