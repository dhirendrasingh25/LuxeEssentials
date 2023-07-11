import React from 'react'
import cartCard from './cartCard'
import {useSelector} from 'react-redux'


const Cart = () => {
  const items = useSelector((state)=> state.cart);
  console.log(items);


  return (
    <div class=' '>
      <div class='flex justify-center items-center'>
      <p class='text-2xl p-4'> CART ITEMS</p>
      </div>
      
      <div class='flex justify-center items-center'>
        <div class='flex justify-center items-center flex-row w-1/2 border m-4'>
        <p> Total Items : </p>
        <div class='p-2  font-bold'>
          <span >{items.length}</span>
        </div>
        </div>
        <div class='flex justify-center items-center flex-row w-1/2 border m-4'>
          <p>Total Amount : </p>
        </div>
      </div>
        
    </div>
  )
}

export default Cart
