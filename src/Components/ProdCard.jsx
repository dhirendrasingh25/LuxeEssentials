import React, { useState ,useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {add , remove} from '../store/cartSlice';
import {useDispatch , useSelector} from 'react-redux'

const ProdCard = ({ products }) => {

  const dispatch = useDispatch();

  const [buttonClicked, setButtonClicked] = useState(false);
  const [SelectedItems,setSelectedItems] = useState([]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    if(buttonClicked){
      setSelectedItems((prevItems)=>[
        ...prevItems,{
          price: products.price.value * 100,
          image: products.allArticleBaseImages[0],
          name: products.name,
          count:count,
          sum: products.price.value * 100 * count,
        }
      ])
      console.log(SelectedItems);
    }
    
  },[buttonClicked])
  
  

  const handleButtonClick = () => {
    
    setButtonClicked(!buttonClicked);
    setCount(1);
    
  };
  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    if (count == 1) {
      handleButtonClick();
      setCount(0);     
    }  
  };
  

  const handleAdd=(products)=>{
    
    dispatch(add(products));
  }

  return (
    <div class='p-4 mr-2'>
      <div className="card card-compact bg-base-100 shadow-xl w-80">
        <figure>
          <img src={products.allArticleBaseImages[0]} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{products.name}</h2>
          <p>Rs.{parseInt(products.price.value * 100).toLocaleString()}</p>
          <div className="card-actions justify-end">
            {buttonClicked ? (
              <>
                <button class='pt-1' onClick={handleDecrement}><RemoveCircleIcon/></button>
                <span class='text-xl'>{count}</span>
                <button class='pt-1'onClick={handleIncrement}><AddCircleIcon/></button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                // onClick={handleButtonClick}
                onClick={()=>handleAdd(products)}
              >
                <p>Add to cart</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
