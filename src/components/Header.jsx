import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Header = () => {
  return (
    <div className='flex justify-between items-center '>
        <a href="" className='text-white block text-3xl'>Kr</a>
        <div className='flex gap-4'>
            <a href=""><FaLinkedinIn size={20} className='text-white'/></a>
            <a href=""><FaGithub size={20} className='text-white'/></a>
            <a href=""><FaInstagram size={20} className='text-white'/></a>
            <a href=""><FaXTwitter size={20} className='text-white'/></a>
        </div>
    </div>
  )
}

export default Header