import React, { useEffect } from 'react'
import {add , remove} from '../store/cartSlice';
import {useDispatch , useSelector} from 'react-redux'

const CartItems = ({products}) => {
    const dispatch = useDispatch();
   
    const handleRemove=(products)=>{
        dispatch(remove(products));
    };
    
    const imageUrl = products.images?.[0]?.url;
    const price=parseInt(products.price.value * 100 *(products.numbersOfPieces+1)).toLocaleString();
    const name=products.name;
    const count=products.numbersOfPieces+1
    return (
        <>
            {
            count==0?(<>
                   
                </>     
            ):(
                <div class='p-2 m-2 max-h-36 border-2 rounded-lg '>
            <div class='flex flex-row  '>
                <img class='h-32' src={imageUrl} alt='products-image' />
                <div class='pb-4 ml-4 flex flex-col items-baseline'>
                <p class='text-black font-extrabold font-sans text-xl  text-ellipsis'>{name}</p>
                <span class='text-lg'>Rs. {price}</span>
                <span>Count : {count}</span>
                <button class='mt-2  font-sans hover:bg-zinc-400 hover:text-white border-teal-950 border-2 pl-3 pr-3 rounded-full' type='button' onClick={()=>handleRemove(products)}> Remove </button>
                <div>
                
                </div>
                </div>
            </div>
            </div>
            )
                

            }
            
        </>
       
    )
}

export default CartItems;