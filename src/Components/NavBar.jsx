import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TableRowsIcon from '@mui/icons-material/TableRows';

const NavBar = () => {
  return (
    <nav class='flex h-20 sticky z-40 top-0  bg-stone-200 z'>
        <div class="navbar bg-base-300 rounded-box">
  <div class="flex-1 px-2 lg:flex-none">
  <Link to='/'><a class=" font-semibold sm:text-3xl md:text-4xl font-sans">Luxe Essentials</a></Link>
  </div> 
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
    <Link to='/Cart'><a class="btn btn-ghost rounded-btn p-3"><ShoppingCartIcon /></a></Link>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn p-3"><TableRowsIcon /></label>
        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        <li><Link to='/Login'><a class='text-xl font-sans font-medium tex'>Login</a></Link></li>
        <li><Link to='/Products'><a class='text-xl font-sans font-medium'>Products</a></Link></li>
        <li><Link to='/About'><a class='text-xl font-sans font-medium'>About</a></Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </nav>
  )
}

export default NavBar
