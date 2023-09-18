import Image from 'next/image'
import React from 'react'

const cartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-slate-400 lg:w-2/3 lg:h-full 2xl:w-1/2 lg:px-20 xl:px-40'>
        <div className='flex justify-between items-center mb-2'>
          <Image src="/temporary/p1.png" alt='product' width={100} height={100}/>
          <div className='p-2'>
            <h2 className='font-bold text-xl uppercase'>Sicilian</h2>
            <span>large</span>
          </div>
          <span className='font-bold'>$123</span>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex justify-between items-center mb-2'>
          <Image src="/temporary/p1.png" alt='product' width={100} height={100}/>
          <div className='p-2'>
            <h2 className='font-bold text-xl uppercase'>Sicilian</h2>
            <span>large</span>
          </div>
          <span className='font-bold'>$123</span>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex justify-between items-center mb-2'>
          <Image src="/temporary/p1.png" alt='product' width={100} height={100}/>
          <div className='p-2'>
            <h2 className='font-bold text-xl uppercase'>Sicilian</h2>
            <span>large</span>
          </div>
          <span className='font-bold'>$123</span>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:w-1/3 2xl:w-1/2 lg:h-full lg:px-20 xl:px-40 xl:text-xl xl:gap-6'>
        <div className='flex justify-between'>
          <span>Subtotal (3 items)</span>
          <span>$71.80</span>
        </div>
        <div className='flex justify-between'>
          <span>Service Cost</span>
          <span>$00.0</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery Cost</span>
          <span className='text-green-600'>FREE</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default cartPage