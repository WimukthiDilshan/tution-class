import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Result = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6bd5bf7f-79c1-43ae-aae5-e2866e09da36");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };
    return (
      <motion.div 
      initial={{ opacity: 0, x:100 }}
      transition={{duration: 1}}
      whileInView={{opacity: 1,x:0 }}
      viewport={{once:true}}
      
      
      className='text-center ' id='Contact'>
        <Link to="/" className='absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded'>Go back to Home</Link>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Result<span className='underline underline-offset-4
        decoration-1 under font-light'>sheet</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Student Please fill the form</p>
  
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
          <div className='flex flex-wrap'>
              <div className='w-full md:w-1/2 text-left py-2'>
                  Name
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
              </div>
              <div className='w-full md:w-1/2 text-left md:pl-4 py-2'>
                  Index No
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Email' placeholder='Medium' required />
              </div>
              <div className='w-full md:w-1/2 text-left py-2 '>
                  Email
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
              </div>
              <div className='w-full md:w-1/2 text-left md:pl-4 py-2'>
                  School
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Grdae' placeholder='Your Grade' required />
              </div>
              <div className='w-full md:w-1/2 text-left py-2'>
                  Medium
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Email' placeholder='Medium' required />
              </div>
              <div className='w-full md:w-1/2 text-left md:pl-4 py-2'>
                  Result*
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Grdae' placeholder='Your Grade' required />
              </div>
              
              
          </div>
  
          
          <div className='my- text-left py-4'>
              About Class
              <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none' name="Message" placeholder='Message'></textarea>
          </div>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>{result ? result : " Submit"}</button>
        </form>

        
<div className='py-4'>
<Footer></Footer>
</div>
       
        
      </motion.div>

      
    )
}

export default Result
