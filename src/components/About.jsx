import React from 'react'


const About = () => {
  return (
    <div className=''>
        <h3 className='text-white text-center text-3xl mb-16 '>About Me</h3>
        <div className='flex justify-between items-center gap-12'>
            <div className='relative w-full'>
                <div className='absolute w-full h-full bg-black/50 z-1 rounded-2xl' ></div>
                <img className='w-full object-cover rounded-2xl' src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
            </div>
            <p className='w-full text-white'>I am a dedicated and versatile  full stack developer with a passion for creating efficient and user friendly
                 web applications. with  5 years of professional experience, i have  worked with a  variety of technologies,
                 including React, Nextjs, Nodejs, MySQL,PostgreSQL, and MongoDB. My journey in web development begain with  a deep curiosity for how
                 things work and it has  evolved  into a career where i continously strive to learn and adapt to new challenges. I thrive in collaborative
                 environments and enjoy  solving complex problemsto deliver high-quality solutions. Outside of  coding, I enjoy staying active , 
                 exploring new technologies, and contributing to open-source projects.
            </p>
        </div>
       
    </div>
  )
}

export default About