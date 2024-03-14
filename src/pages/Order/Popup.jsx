import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Popup = ({ total, burgerComponents, resetPesanan }) => {
  const navigate = useNavigate()
  const pesanan = burgerComponents.filter(ingredient => ingredient.quantity > 0);

  const handleClose = () => {
    resetPesanan();
    navigate("/order")
  }

  return (
    <div className='fixed z-50 h-screen w-full bg-black/50 flex items-center justify-center'>
      <div className='w-1/2 h-2/3 bg-white rounded-xl p-10 relative'>
        <h2 className='font-bold text-2xl text-green-700 text-center'>Selamat Pesanan sudah dibuat !</h2>
        <h3 className='mt-5 font-bold text-xl'>Rincian Pesanan :</h3>
        {pesanan.map(ingredient => (
          <div className='flex flex-row justify-between items-center gap-4 text-xl'>
            <span className="w-1/3">{ingredient.name}</span>
            <span className="w-1/3 text-center">x{ingredient.quantity}</span>
            <span className="w-1/3 text-right font-bold">{ingredient.price}</span>
          </div>
        ))}
        <div className='flex items-center justify-between font-bold text-xl mt-4 pt-4 border-t border-t-black'>
          <span>Total :</span>
          <span>{total.toLocaleString("id-ID")}</span>
        </div>
        <button className='absolute bottom-5 right-5 bg-red-500 px-6 py-2 text-white rounded-lg font-bold' onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default Popup