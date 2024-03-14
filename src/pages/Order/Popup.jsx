import React from 'react'

const Popup = () => {
  return (
    <div className='absolute z-50 h-screen w-full bg-black/50 flex items-center justify-center'>
      <div className='w-1/2 h-2/3 bg-white rounded-xl p-10 text-center'>
        <h2 className='font-bold text-2xl text-green-700'>Selamat Pesanan sudah dibuat !</h2>
        <p className='mt-10'>Mohon tunggu pesanan anda bla bla bla bla</p>
      </div>
    </div>
  )
}

export default Popup