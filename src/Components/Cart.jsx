import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {Box} from '@mui/material'
import CartItems from './CartItems'



const Cart = () => {
  const items = useSelector((state)=> state.cart.data);
  const count=useSelector((state)=>state.cart.totalCount)
  const sum=useSelector((state)=>state.cart.totalAmount)
  
 
  return (
    <div class=' '>
      <div class='flex justify-center items-center'>
      <p class='text-2xl p-4'> CART ITEMS</p>
      </div>
      
      <div class='flex justify-center items-center  flex-col p-4 '>
        <div class='flex justify-center items-center flex-col w-auto sm:w-full   '>
        <p class='m-2'> Total Items : <span >{count}</span> </p>      
        {
          items.length==0?(
            <>
            <div class='flex justify-center items-center  w-80 sm:w-1/3 border-4 h-96 rounded-md mt-4 '>
            <span > Cart is Empty </span>
            </div>
            </>
          ):(
            <>
          <div class='flex flex-col max-h-96 scroll-smooth w-80 sm:w-1/3 overflow-scroll p-3 border-4 rounded-md' >
            {
              items && items.map((item)=>(
                <CartItems products={item} id={item.code} />
              ))
            }
          </div> 
            </>
          )
        }   

        </div>
        <div class='flex justify-center items-center  w-80 sm:w-1/3 border-4 rounded-md mt-4 '>
          <p class='m-2'>Total Amount : Rs. {(sum).toLocaleString()} </p>
          
        </div>
        <div class='flex justify-center items-center   mt-4 '>
        <button class='mt-5  font-sans hover:bg-stone-600 hover:text-white border-teal-950 border-2 px-3 py-2 rounded-3xl' type='button' > Check Out </button>
        </div>
        
      </div>
        
    </div>
  )
}

export default Cart
