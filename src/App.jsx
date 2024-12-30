import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonails from './Pages/Testimonails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Page1 from './Pages/page1';
import Navbar from './components/Navbar';
import Result from './Pages/Result';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='w-full overflow-hidden'>
        
        <ToastContainer />
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
              <Header />
              <About />
              <Projects />
              
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/Testimonails" element={<Testimonails />} />
          <Route path="/Result" element={<Result/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
