import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-[-webkit-fill-available] text-red-500 overflow-x-scroll scrollbar md:scrollbar-thumb-slate-300 scrollbar-thin'>
        <div className='w-max flex'>
            {featuredProducts.map(item=> (
                <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                    {item.img && <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                        <Image src={item.img} alt='' fill className="object-contain"/>
                    </div>}
                    <div className='flex-1 flex flex-col gap-4 text-center items-center justify-center'>
                        <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                        <p className='p-4 2xl:p-8'>{item.desc}</p>
                        <span className='font-bold text-xl'>${item.price}</span>
                        <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featured