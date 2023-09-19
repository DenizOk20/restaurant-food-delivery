"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];

const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(2)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() =>
            setCurrentSlide(prev => prev === data.length -1 ? 0 : prev+1),2000
        )
        return () => clearInterval(interval)
    },[])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        <div className='flex-1 flex flex-col items-center justify-center gap-8 text-red-500 font-bold'>
            <h1 className='text-3xl text-center uppercase p-4 md:text-5xl md:p-10 xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button onClick={() => router.push('/menu')} className='bg-red-500 text-white px-8 py-4'>Order Now</button>
        </div>

        <div className='relative flex-1 w-full'>
            <Image src={data[currentSlide].image} alt='slide' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider