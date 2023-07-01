import React, { useState } from 'react';

const ProdCard = ({ products }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div class='p-4 mr-2' >
      <div className="card card-compact bg-base-100 shadow-xl w-80">
        <figure>
          <img src={products.allArticleBaseImages[0]} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{products.name}</h2>
          <p>Rs.{products.price.value * 1000}</p>
          <div className="card-actions justify-end">
            <button
              type="button"
              className={`btn btn-primary ${buttonClicked ? 'bg-gray-300' : ''}`}
              onClick={handleButtonClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
