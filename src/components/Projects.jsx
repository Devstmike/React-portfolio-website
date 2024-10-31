import React from 'react'
import { myProject } from '.'

const Projects = () => {
  return (
    <div>
        <div className='text-white flex justify-end items-center text-2xl'>
            <h1 className='w-1/2 mb-16'>Projects</h1>
        </div>
        {
            myProject.map(( exp , index) =>(
                <div key={index} className='text-white flex justify-between items-start mb-12'>
                    <div className='w-full'><img src={exp.img} alt="" width={300} height={300} className='rounded-2xl'/></div>
                    <div className='w-full flex flex-col gap-2'>
                        <h3 className='capitalize'>{exp.title}</h3>
                        <p className='text-white/50'>{exp.text}</p>
                        <div className='my-3'>
                            {
                                exp.skills.map((skill, index2) => (
                                    <span key={index2} className='bg-black/40 text-purple-600 p-2 rounded-xl mr-2'>{skill}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
)
}

export default Projects