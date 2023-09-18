import { contact } from '@/data'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:px-20 lg:px-40'>
        <div className='flex flex-col w-full h-screen p-4'>
            {/* TİTLE  */}
            <div className='h-[20%] flex items-center justify-center'>
                <h1 className='font-bold text-red-500 text-xl lg:text-3xl'>Contact Us</h1>
            </div>
            {/* Infos */}
            <div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-center lg:h-[70%] gap-8 shadow-md shadow-red-200'>
                {/* single info */}
                {contact.map(item => (
                    <div key={item.id} className='flex flex-col items-center justify-center even:bg-fuchsia-100 lg:gap-8 lg:p-2'>
                        {item.img && <div className='p-3'>
                            <Image src={item.img} alt='contactImg' width={30} height={30} className='lg:h-8 lg:w-8 object-contain'/>
                        </div>}
                        <div className='flex flex-col items-center gap-3 p-2 lg:gap-2'>
                            <h1 className='font-bold text-red-500 text-xl lg:text-2xl'>{item.title}</h1>
                            <p className='text-center'>{item.desc}</p>
                            <p className='font-bold'>{item.info}</p>
                            {item.button && <button className='hidden xl:block p-3 bg-red-500 text-white rounded-md'>{item.button}</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page