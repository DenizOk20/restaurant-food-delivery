import Image from 'next/image'
import React from 'react'
import {singleProduct} from '@/data'
import Price from '@/components/Price'

const singleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 flex flex-col justify-around text-red-500 h-screen md:flex-row md:gap-8 md:items-center'>
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} alt='' fill className='object-contain'/>
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='font-bold text-3xl xl:text-4xl'>{singleProduct.title}</h1>
        <p className='text-sm xl:text-xl'>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  )
}

export default singleProductPage