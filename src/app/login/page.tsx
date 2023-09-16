import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const loginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] xl:w-1/2'>
        <div className='relative w-full h-1/3 md:h-full md:w-1/2'>
          <Image src="/loginBg.png" alt='' fill className='object-cover'/>
        </div>

        <div className='p-10 flex flex-col gap-4 md:w-1/2'>
          <h1 className='font-bold text-red-500 text-xl xl:text-3xl'>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-2 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src="/google.png" alt='' width={20} height={20} className='object-contain'/>
            <span>Log in with Google</span>
          </button>
          <button className='flex gap-2 p-4 ring-1 ring-blue-300 rounded-md'>
            <Image src="/facebook.png" alt='' width={20} height={20} className='object-contain'/>
            <span>Log in with Google</span>
          </button>
          <p className='text-sm'>Have a problem ? <Link className='underline' href="/">Contact us</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default loginPage