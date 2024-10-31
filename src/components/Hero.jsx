import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-between items-center gap-32'>
        <div className='w-full'>
            <h3 className='text-white text-7xl font-thin'>Kevin Rush</h3>
            <h4 className='text-3xl my-8 bg-gradient-to-r from-pink-300 to-green-300 bg-clip-text font-bold' >Full Stack Developer</h4>
            <p className='text-white'>I am  a passionate  full stack developer with a knack for crafting robust and scalable web applications
                with 5 years of hands-on experience, i have honed y skills in front-end technologies like React and Nextjs, 
                as well as backend technologies like Nodejs, MySQL, PostgreSQL and MongoDB. My goal  is to leveragemy expertise
                to create innovative solutions that drive business growth and deliver exceptional user experiences. 
            </p>
        </div>
        <div className='relative w-full'>
            <div className='absolute w-full h-full bg-black/50 z-1 rounded-2xl' ></div>
            <img className='w-full object-cover rounded-2xl' src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
        </div>
    </div>
  )
}

export default Hero