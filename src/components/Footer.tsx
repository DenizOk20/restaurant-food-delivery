import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 flex items-center justify-between p-4 lg:px-20
     xl:px-40 text-red-500'>
      <Link href="/" className='font-bold text-xl'>Mare Pizza</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer