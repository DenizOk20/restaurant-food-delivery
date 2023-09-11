import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 p-4 flex items-center justify-between text-red-500 border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-4 flex-1'>
      <Link href="/">HomePage</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/contact">Contact</Link>
      </div>
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Mare Pizza</Link>
      </div>

      <div className='md:hidden'>
        <Menu/>
      </div>

      <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
        <div className='md:absolute top-2 right-2 lg:static flex gap-2 items-center justify-center bg-orange-300 p-1 rounded-md cursor-pointer'>
          <Image src="/phone.png" alt='phone' width={20} height={20}/>
          <span>0 123 456 7890</span>
        </div>
        {!user ? 
        (<Link href="/login">Login</Link>) :
        (<Link href="/orders">Orders</Link>)}
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar