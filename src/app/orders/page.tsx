import React from 'react'

const ordersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead className='text-left'>
          <tr>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-[12px] md:text-base bg-red-50'>
            <td className='hidden md:block py-2 px-1'>1237861238721</td>
            <td className='py-2 px-1'>19.07.2023</td>
            <td className='py-2 px-1'>89.90</td>
            <td className='hidden md:block py-2 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-2 px-1'>On the way (approx. 10min)...</td>
          </tr>
          <tr className='text-[12px] md:text-base odd:bg-gray-50'>
            <td className='hidden md:block py-2 px-1'>1237861238721</td>
            <td className='py-2 px-1'>19.07.2023</td>
            <td className='py-2 px-1'>89.90</td>
            <td className='hidden md:block py-2 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-2 px-1'>On the way (approx. 10min)...</td>
          </tr>
          <tr className='text-[12px] md:text-base odd:bg-gray-50'>
            <td className='hidden md:block py-2 px-1'>1237861238721</td>
            <td className='py-2 px-1'>19.07.2023</td>
            <td className='py-2 px-1'>89.90</td>
            <td className='hidden md:block py-2 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-2 px-1'>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ordersPage