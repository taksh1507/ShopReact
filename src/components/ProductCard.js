import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-footer">
        <span className="price">${product.price}</span>
        <button className={`btn ${addedToCart ? 'added' : ''}`} onClick={handleAddToCart}>
          {addedToCart ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
