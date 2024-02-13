import React from 'react'
import pic1 from '../assets/Background.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={pic1} alt="/" />
      <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Everything Holidays & Vacations</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eveniet soluta cum quas accusamus dolore eius porro corporis
              quo molestias alias.</p>
            <button className='bg-white text-black '>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
