import React, { useEffect, useState } from 'react'
import  ProdCard from './ProdCard'
import { fetchFromAPI } from '../../utils/fetchFromAPI';

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    
    fetchFromAPI()
    .then((data) => setproducts(data.results))

    
    
  }, [])
  
  
  
  return (
    <div>
        <div class='flex flex-row   justify-center items-center sticky'>
          <button type='button' class='p-2 m-5  rounded-3xl text-white bg-black px-5 font-thin hover:bg-slate-600  '> MEN </button>
          <button type='button' class='p-2 m-5  rounded-3xl text-white bg-black px-5 font-thin hover:bg-slate-600 '> WOMEN </button>
          <button type='button' class='p-2 m-5  rounded-3xl text-white bg-black px-5 font-thin hover:bg-slate-600 '> ALL </button>
        </div>
        <div>
        <div class='flex justify-center items-center '>
          <div class='flex flex-col sm:flex-row flex-wrap'>
            {
              products && products.map((products,code) => (
                <ProdCard key={code}  products={products}/>
              ))
              
            }
          
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Products