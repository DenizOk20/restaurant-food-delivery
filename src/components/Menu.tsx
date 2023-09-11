"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

const Menu = () => {
    const user = false
    const [open,setOpen] = useState(false)
  return (
    <div>
        {open ? 
            <Image src="/close.png" alt='menu' width={20} height={20} onClick={() => setOpen(false)}/>
            : 
            <Image src="/open.png" alt='menu' width={20} height={20}  onClick={() => setOpen(true)}/>
        }
        {open && <div className='bg-red-500 text-white absolute top-24 left-0 w-full 
            h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8 text-3xl'>
            {links.map(item=> (
                <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
            ))}
            {!user ? 
            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
            :
            <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
             }
             <Link href="/cart" onClick={() => setOpen(false)}>
                <CartIcon/>
             </Link>
        </div>}
    </div>
  )
}

export default Menu