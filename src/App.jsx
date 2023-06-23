import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar ,About,Login , Products ,Home,Cart} from './Components';

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App