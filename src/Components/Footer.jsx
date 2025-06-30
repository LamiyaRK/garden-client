import React from 'react';
import logo from '/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
    return (
       <div className='bg-[#2A7D2E] text-white'>
         <div className='mx-auto w-5/6 py-10'>
        <div className='flex justify-center items-center flex-col'>
            <div className='flex flex-col'>
             <img src={logo} className='w-[120px]'></img>
                <a class=" text-4xl"> Verdantia</a>
              </div>
              <div class='flex gap-3 items-center mt-5 '>
                    <FaFacebook size={30}/>
                   <FaTwitter size={30}/>
                   <FaInstagram size={30}/>
                   <FaLinkedin size={30}/>
                </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5'>
             <div className=' text-lg   flex flex-col justify-center items-center space-y-3 '>
              
                    <div className='text-3xl '>Get in Touch</div>
                <div className='flex items-center gap-3 '><FaPhone/><p>+88 01533 333 333</p></div>
                  <div className='flex items-center gap-3'><AiOutlineMail /><p>info@gmail.com</p></div>
                    <div className='flex items-center gap-3'><FaLocationDot /><p>72, Wall street, King Road, Dhaka</p></div>
                
              </div>
              <div className='text-lg flex flex-col justify-center items-center space-y-3'>
              
              <p  className='text-3xl'>Legal</p>  
          <a><p>Terms of uses</p></a> 
           <p>Privacy policy</p>
            <p>Cookie policy</p>
              
              </div>
              <div className=' flex flex-col justify-center items-center'>
              
                    <p className='text-3xl '>Connect with Us</p>
                <fieldset class="fieldset  md:w-md text-[#2A7D2E] font-semibold flex flex-col items-center justify-center">
  
  
  <input type="text" class="input " placeholder="Name" />

  <input type="email" class="input" placeholder="Email" />

  <textarea type="text" class="input h-20 text-start" placeholder="Message" />
</fieldset>
              </div>
                
                </div>
             
              
        </div>
       </div>
    );
};

export default Footer;