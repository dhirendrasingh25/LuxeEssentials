import React from 'react'
import {add , remove} from '../store/cartSlice';
import {useDispatch , useSelector} from 'react-redux'

const cartCard = () => {
  const handleRemove=(products)=>{
    dispatch(remove(products));
  }
  return (
    <div>
      <div class='flex flex-row'>
        <img> inpviwns</img>
        <div class='flex felx-col'>
        <p>oj-dwow-</p>
        <span>0k=wf0e=fw</span>
      </div>
      </div>
      <buttom type='button'onClick={()=>handleRemove(products)}> Remove </buttom>
    </div>
   
  )
}

export default cartCard;