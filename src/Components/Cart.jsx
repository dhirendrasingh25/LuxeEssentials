import React from 'react'
import CartCard from './CartCard';

import {useSelector} from 'react-redux'
import {Box} from '@mui/material'



const Cart = () => {
  const items = useSelector((state)=> state.cart);
 
  return (
    <div class=' '>
      <div class='flex justify-center items-center'>
      <p class='text-2xl p-4'> CART ITEMS</p>
      </div>
      
      <div class='flex justify-center items-center flex-col sm:flex-row'>
        <div class='flex justify-center items-center flex-col w-1/2 border m-4 '>
        <p class='m-2'> Total Items : <span >{items.length}</span> </p>
        <CartCard />
        <Box class=' bg-slate-300 h-96 flex flex-wrap w-auto'>
   
            
    
        
  
     
        </Box>
        </div>
        <div class='flex justify-center items-center flex-col w-1/2 border m-4 '>
          <p class='m-2'>Total Amount : </p>
        <Box class=' bg-slate-300 h-96 flex flex-wrap w-auto'>
        </Box>
        </div>
      </div>
        
    </div>
  )
}

export default Cart
