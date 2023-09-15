"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    price: number,
    id:number,
    options?: { title: string; additionalPrice: number }[],
}

const Price = ({price,id,options}: Props) => {

    const [total,setTotal] = useState(price)
    const [selected,setSelected] = useState(0)
    const [quantity,setQuantity] = useState(1)

    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        );
    },[quantity,selected,options,price])

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-bold'>
            ${total.toFixed(2)}
        </h2>

        <div className='flex gap-4'>
            {options?.map((option,index) => (
                <button
                 key={option.title} 
                 className='p-2 ring-1 ring-red-500 rounded-md'
                 style={{
                    background: selected === index ? "rgb(239 68 68)" : "white",
                    color: selected === index ? "white" : "rgb(239 68 68)"
                 }}
                 onClick={() => setSelected(index)}
                >{option.title}</button>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                <span className=''>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button 
                        onClick={() => setQuantity(prev => prev>1 ? prev-1 : 1)}
                    >{'<'}</button>
                    <span>{quantity}</span>
                    <button
                        onClick={() => setQuantity(prev => prev < 9 ? prev +1 : 9)}
                    >{'>'}</button>
                </div>
            </div>
            <button className='bg-red-500 text-white p-3 w-60 uppercase ring-1 ring-red-500'>Add to Cart</button>
        </div>
    </div>

  )
}

export default Price