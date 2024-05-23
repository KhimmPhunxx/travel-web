import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const FooterPage = () => {
  return (
   <footer className='w-full bg-gray-200 text-whitep py-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='p-5'>
                    <h1 className='text-2xl text-gray-700 font-semibold'>About Us</h1>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.</p>
                </div>
                <div className='p-5'>
                    <h1 className='text-2xl text-gray-700 font-semibold'>Contact Us</h1>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.</p>
                </div>
                <div className='p-5'>
                    <h1 className='text-2xl text-gray-700 font-semibold'>Social Media</h1>
                    <div className='flex gap-4 mt-5'>
                       <NavLink to={'https://web.facebook.com/imvakhim/'} target='_blank'> <FaFacebook className='text-3xl text-blue-500'/></NavLink>
                        <NavLink to={'#'}> <FaTelegram className='text-3xl text-blue-500'/></NavLink>
                        <NavLink to={'#'}> <FaInstagramSquare className='text-3xl text-red-500'/></NavLink>
                        <NavLink to={'#'}> <FaLinkedin className='text-3xl text-blue-500'/></NavLink>
                        
                    </div>
                </div>
                <div className='p-5'>
                    <h1 className='text-2xl text-gray-700 font-semibold'>Address</h1>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates.</p>
                </div>
            </div>
        </div>
   </footer>
  )
}

export default FooterPage
