import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='h-screen bg-black flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='text-white xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p>
          <CountDown/>
        <button className='bg-red-500 text-white py-3 px-6 rounded-md'>Order Now</button>
      </div>

      <div className='relative w-full flex-1 md:h-full'>
        <Image src="/offerProduct.png" alt='offerImage' className='object-contain' fill/>
      </div>
    </div>
  )
}

export default Offer