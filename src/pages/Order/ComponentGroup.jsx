import React from 'react'

const ComponentGroup = ({burgerComponents, handleAddComponent}) => {
  
  return (
    <div className='w-2/3 flex-1 border border-green-600 p-10 rounded-lg grid grid-cols-4 gap-4 text-xl'>
      {burgerComponents.map((component, idx) => (
        <div key={idx} className='flex flex-col items-center'>
          <button
            className='rounded-xl font-bold text-black text-center flex flex-col items-center'
            onClick={() => handleAddComponent(idx, component.name)}
          >
            {component.name}
            <span className='font-normal'>Rp {component.price}</span>
          </button>
          <span>{component.quantity}x</span>
        </div>
      ))}
    </div>
  )
}

export default ComponentGroup