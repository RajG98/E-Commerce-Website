import React from 'react';
import './ProductCard.css';

const ProductCard = ({src}) => {
  return (
      <div className="product-card">
          <img src="images/icons/heart.png" alt="" className="product-card-icon" />
            <img src={src} alt="" className="product-icon-img" />
    </div>
  )
}
export default ProductCard;