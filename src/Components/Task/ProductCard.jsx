import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: <b>₹</b> {product.price}/-</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}

export default ProductCard;
