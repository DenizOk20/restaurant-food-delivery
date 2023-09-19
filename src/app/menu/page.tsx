import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const menuPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center'>
      {
        menu.map(category => (
          <Link 
            key={category.id}
            href={`/menu/${category.slug}`}
            style={{backgroundImage: `url(${category.img})`}}
            className='h-1/3 w-full bg-cover px-3 md:h-1/2 md:p-3'
            >
              <div className={`text-${category.color} w-1/2`}>
                <h1 className='text-2xl uppercase font-bold'>{category.title}</h1>
                <p className='text-sm m-0 md:my-3'>{category.desc}</p>
                <button className={` 2xl:block  bg-${category.color === "black" ? "black" : "red-50"} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
              </div>
          </Link>
        ))
      }
    </div>
  )
}

export default menuPage