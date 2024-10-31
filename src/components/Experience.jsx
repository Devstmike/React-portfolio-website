import React from 'react'
import { myExperience } from '.'

const Experience = () => {
  return (
    <div>
        <div className='text-white flex justify-end items-center text-2xl'>
            <h1 className='w-1/2 mb-16'>Experience</h1>
        </div>
        {
            myExperience.map(( exp , index) =>(
                <div key={index} className='text-white flex justify-between items-start mb-12'>
                    <div className='w-full'>{exp.year}</div>
                    <div className='w-full flex flex-col gap-2'>
                        <h3 className='capitalize'>{exp.title}</h3>
                        <p className='text-white/50'>{exp.description}</p>
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

export default Experience