import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    data:[],
};

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts(state,action){
            state.data = action.payload
        },
        
    },
})

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;


//Thunks
export function fetchProducts(){
    const BASE_URL='https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';


    const options = {
    method: 'GET',
    params: {
        country: 'us',
        lang: 'en',
        currentpage: '0',
        pagesize: '30',
    // categories: 'men_all',
        concepts: 'H&M MAN'
        
    },
    headers: {
        // 'X-RapidAPI-Key': 'd9ebc6e747msh5fff7267e655227p111cdejsn580fb834d2d6',
        // 'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        'X-RapidAPI-Key': 'a0569ee998mshff72b6e48e35b2cp1c3512jsn2b6602d51d68',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
    };
    return async function fetchProductThunk(dispatch , getState){
        try{

            const res= await axios.get(`${BASE_URL}`,options)
            const data= await res.data.results;
            dispatch(setProducts(data));


        }catch(err){
            console.log(err);
        }
    }
}