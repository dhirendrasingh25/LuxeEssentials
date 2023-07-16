import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import productsReducer from'./productsSlice'

const store = configureStore({ 
    reducer: {
       cart: cartReducer,
       product: productsReducer,
    }
})

export default store;