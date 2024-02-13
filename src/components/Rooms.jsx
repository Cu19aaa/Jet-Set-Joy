import React from 'react'
import Pic6 from '../assets/Pic6.jpg'
import Pic7 from '../assets/Pic7.jpg'
import Pic8 from '../assets/Pic8.jpg'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Rooms Straight Out Of Your Dreams</h3>
        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Enim, dicta hic facere voluptas aliquam labore.</p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src={Pic6} alt="" />
        <img className='object-cover w-full h-full row-span-2' src={Pic7} alt="" />
        <img className='object-cover w-full h-full' src={Pic8} alt="" />
      </div>
    </div>
  )
}

export default Rooms
