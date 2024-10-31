import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io";


const Skills = () => {
  return (
    <div>
    <h1 className='text-white text-center text-2xl'>Technologies</h1>
    <div className='flex justify-between items-center max-w-[500px] mx-auto mt-8 '>
       <div className='border border-gray-600 rounded-2xl p-2 inline-block'><FaReact size={50} className='text-blue-300'/></div>
      <div className='border border-gray-600 rounded-2xl p-2 inline-block'> <FaNode size={50} className='text-white'/></div>
       <div className='border border-gray-600 rounded-2xl p-2 inline-block'><SiMongodb size={50} className='text-green-300'/></div>
       <div className='border border-gray-600 rounded-2xl p-2 inline-block'><IoLogoNodejs size={50} className='text-white'/></div>
       <div className='border border-gray-600 rounded-2xl p-2 inline-block'><BiLogoPostgresql size={50} className='text-blue-800'/></div>
    </div>
  </div>
  )
}

export default Skills