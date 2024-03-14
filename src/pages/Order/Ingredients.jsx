import React from 'react'

const Lettuce = () => <div className='w-1/2 h-2 rounded-lg bg-green-500'></div>
const Tomato = () => <div className='w-1/2 h-2 rounded-full bg-red-400'></div>
const Cheese = () => <div className='w-1/2 h-2 rounded-full bg-yellow-500'></div>
const Mayo = () => <div className='w-1/2 h-1 rounded-full bg-orange-200'></div>
const Sauce = () => <div className='w-1/2 h-1 rounded-full bg-red-400'></div>
const Meat = () => <div className='w-1/2 h-4 rounded-full bg-red-500'></div>
const Pickles = () => (
  <div className='w-1/2 h-2 rounded-full grid grid-cols-3 gap-1'>
    <div className='h-full bg-green-700 rounded-full'></div>
    <div className='h-full bg-green-700 rounded-full'></div>
    <div className='h-full bg-green-700 rounded-full'></div>
  </div>
)

const Ingredients = ({ type }) => {
  return (
    <>
      {type == "Cheese" && <Cheese />}
      {type == "Lettuce" && <Lettuce />}
      {type == "Tomato" && <Tomato />}
      {type == "Mayo" && <Mayo />}
      {type == "Meat" && <Meat />}
      {type == "Sauce" && <Sauce />}
      {type == "Pickles" && <Pickles />}
      
    </>
  )
}

export default Ingredients