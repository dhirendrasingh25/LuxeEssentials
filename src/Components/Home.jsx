import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class='sm:pt-20 '>
      <ul>
        <li>
          <div class='flex  sm:flex-row flex-col bg-stone-200 rounded-xl sm:p-20 sm:pt-20 sm:m-10 pt-10 m-3'>
                <div class=' flex h-auto w-full  bg-stone-200 sm:pl-20 '>
                  <div class='flex flex-col justify-around '>
                    <div class='flex flex-col p-10 sm:p-0'>
                    <p class='font-mono sm:text-5xl text-3xl font-black leading-10 sm:p-5 p-3 -rotate-6  bg-slate-50 rounded-lg'>LET's</p>
                    <p class='font-mono sm:text-5xl text-3xl font-black leading-10 sm:p-5 p-3 -rotate-6 rounded-lg'>EXPLORE</p>
                    <p class='font-mono sm:text-5xl text-3xl font-black leading-10 sm:p-5 p-3 -rotate-6 rounded-lg ' 
                    style={{background: "linear-gradient(360deg, #E0C340 0%, #DFC23E 3.93%, #E1C441 7.23%, #E3C743 10.23%, #E4C542 13.14%, #E6C744 16.22%, #E7C845 19.84%, #E5C643 24.38%, #E6C945 31.00%, #E3C743 37.19%, #E9CA48 43.33%, #EDCE49 50.36%, #F0D44C 56.57%, #F4D84F 62.71%, #F6DA52 67.12%, #F7DB53 73.77%, #F9DD55 79.08%, #F9DF56 85.64%, #FAE157 93.50%, #F9DF56 100%)"}}>
                    LUXURY</p>
                    <p class='p-5 pt-14  sm:text-2xl font-sans font-medium'>Unviel the Indian Luxury with Luxe Essentials</p>                    </div>
                    <div class='flex sm:p-5 sm:mt-2 sm:mr-5 ml-10'>
                   <Link to='/Login'> <button type='button' class="btn btn-outline btn-secondary btn-lg  border-2 rounded-md hover:border-white  border-pink-700 cursor-grabbing"><a class='text-pink-700 hover:text-white'>Login</a></button></Link>
                    </div>
                  </div>
                </div>
                <div class=' flex sm:w-screen h-auto  justify-center items-center'>
                <img class=' sm:w-9/12 sm:h-9/12 p-10 ' 
                
                src='../firstpage.svg'></img>
                </div>
          </div>
        </li>
        <li>
        <div class='flex  sm:flex-row flex-col rounded-xl sm:p-20 sm:pt-20 sm:m-10 pt-10 m-3'
        style={{background: "linear-gradient(360deg, #E0C340 0%, #DFC23E 3.93%, #E1C441 7.23%, #E3C743 10.23%, #E4C542 13.14%, #E6C744 16.22%, #E7C845 19.84%, #E5C643 24.38%, #E6C945 31.00%, #E3C743 37.19%, #E9CA48 43.33%, #EDCE49 50.36%, #F0D44C 56.57%, #F4D84F 62.71%, #F6DA52 67.12%, #F7DB53 73.77%, #F9DD55 79.08%, #F9DF56 85.64%, #FAE157 93.50%, #F9DF56 100%)"}}>
                
                <div class=' flex sm:w-screen h-auto  justify-center items-center overflow-hidden'>
                <img class=' sm:w-9/12 sm:h-9/12 p-10 rounded-xl ' 
                
                src='../second.png'></img>
                </div>
                <div class=' flex h-auto w-full  sm:pl-20 '>
                  <div class='flex flex-col pt-20 '>
                    <div class='flex flex-col p-10 sm:p-0'>
                    <p class='font-mono sm:text-5xl text-3xl font-black leading-10 sm:p-5 p-3  bg-slate-50 rounded-lg'>PAY DAY</p>
                    <p class='font-mono sm:text-5xl text-3xl font-black leading-10 sm:p-5 p-3  rounded-lg mt-4'>SALE NOW</p>
                    <p class='p-5 pt-14  sm:text-2xl font-sans font-medium'>Spend minimal Rs10K get 30% off
voucher code for your next purchase</p>                 
                    <p class='p-5 pt-14  sm:text-xl font-sans  font-normal'>*Terms & Conditions apply</p>                    
                    </div>
                  <Link to='./Products'><button type='button' class='bg-black hover:bg-gray-700 text-white sm:p-5 p-3 sm:text-lg font-sans rounded-xl ml-10 mb-10 cursor-grabbing"'> SHOP NOW </button></Link>
                  </div>
                </div>
          </div>
        </li>
      </ul>
      
    </div>
  )
}

export default Home
