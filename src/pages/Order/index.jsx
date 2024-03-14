import React, { useEffect } from 'react'
import { useState } from 'react';
import Ingredients from './Ingredients';
import OrderHeader from './OrderHeader';
import ComponentGroup from './ComponentGroup';
import { useLocation } from 'react-router-dom';
import Popup from './Popup';

export default () => {
  const [orderList, setOrderList] = useState([]);
  const [burgerComponents, setBurgerComponents] = useState([
    { name: 'Cheese', price: 5000, quantity: 0 },
    { name: 'Lettuce', price: 1000, quantity: 0 },
    { name: 'Tomato', price: 2500, quantity: 0 },
    { name: 'Pickles', price: 2000, quantity: 0 },
    { name: 'Meat', price: 14000, quantity: 0 },
    { name: 'Mayo', price: 4000, quantity: 0 },
    { name: 'Sauce', price: 4000, quantity: 0 },
  ]);
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const doneParams = urlParams.get('done');

  const handleAddComponent = (index, name) => {
    if (orderList.length < 10) {
      setBurgerComponents((prevComponents) => {
        const updatedComponents = prevComponents.map((component, i) => {
          if (i === index) {
            return { ...component, quantity: component.quantity + 1 };
          }
          return component;
        });
        return updatedComponents;
      });
      setOrderList((prev) => [...prev, name]);
    }
  };

  const handleResetOrder = () => {
    setBurgerComponents((prevComponents) =>
    prevComponents.map((component) => ({ ...component, quantity: 0 }))
  );
  setOrderList([]);
  }

  return (
    <div className='relative'>
      {doneParams && <Popup /> }
      <OrderHeader burgerComponents={burgerComponents} handleReset={handleResetOrder}/>
      
      <div className='mt-20 w-full flex flex-col gap-10 items-center'>
        <div className='w-1/5 min-w-[300px] border border-green-600 py-10 rounded-lg flex flex-col items-center justify-center gap-1'>
          <div className='w-[52%] h-8 rounded-t-full bg-orange-300'></div>
          {orderList.map((ingredients, idx) => (
            <Ingredients key={ingredients + '-' + idx} type={ingredients} />
          ))}
          <div className='w-[52%] h-8 rounded-b-full bg-orange-300'></div>
        </div>

        <ComponentGroup burgerComponents={burgerComponents} handleAddComponent={handleAddComponent} />
      </div>
    </div>
  )
}
