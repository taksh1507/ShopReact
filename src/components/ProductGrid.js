import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Premium Sneakers',
      description: 'Comfortable and stylish sneakers for everyday wear',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Backpack',
      description: 'Durable backpack perfect for travel and daily use',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Classic Watch',
      description: 'Elegant timepiece for any occasion',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Sunglasses',
      description: 'UV protection stylish sunglasses',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Wireless Headphones',
      description: 'High-quality sound with noise cancellation',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'Jacket',
      description: 'Comfortable and warm winter jacket',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1539533057592-4d2b7472e0a7?w=300&h=200&fit=crop'
    }
  ]);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
