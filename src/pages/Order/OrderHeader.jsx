import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const OrderHeader = ({ total, handleReset }) => {

  return (
    <header className='flex items-center justify-between w-full p-10'>
      <span className='font-bold text-2xl'>Rp {total.toLocaleString("id-ID")}</span>
      <div className='flex items-center gap-4 font-medium text-white'>
        <Link to={"/order?done=true"} className='bg-green-600 border-2 border-green-600 px-4 py-2 rounded-lg'>Order Burger</Link>
        <button onClick={handleReset} className='border-2 border-green-600 rounded-lg px-4 py-2 text-black'>Reset Order</button>
      </div>
    </header>
  )
}

export default OrderHeader