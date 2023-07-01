import axios from 'axios';

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
    'X-RapidAPI-Key': 'd9ebc6e747msh5fff7267e655227p111cdejsn580fb834d2d6',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

export  const  fetchFromAPI=async()=>{
    const {data} =await axios.get(`${BASE_URL}`,options)
    return data;
}

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }