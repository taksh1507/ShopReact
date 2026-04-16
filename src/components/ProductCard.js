import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={handleImageError}
          />
        ) : (
          <div className="image-placeholder">
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
