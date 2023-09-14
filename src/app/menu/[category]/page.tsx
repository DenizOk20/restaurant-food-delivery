import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categoryPage = () => {
  return (
    <div className='text-red-500 flex flex-wrap w-full'>
      {pizzas.map(item => (
        <Link 
          key={item.id} 
          href={`/category/${item.id}`}
          className='w-full h-[60vh] sm:w-1/2 lg:w-1/3 border-b-2 border-r-2 border-red-500 even:bg-fuchsia-50 p-4 flex flex-col justify-between group'
          >
            { item.img &&
            <div className='relative h-[80%]'>
                <Image src={item.img} alt='categoryImage' fill className='object-contain'/>
            </div>
            }
            <div className='flex flex-row justify-between items-center p-2'>
              <h1 className='font-bold text-xl p-2'>{item.title}</h1>
              <p className='group-hover:hidden text-xl'>{item.price}</p>
              <button className='hidden group-hover:block bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default categoryPage