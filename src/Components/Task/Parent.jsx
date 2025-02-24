import React, { useState, useEffect } from 'react';
import './style.css';
import ProductList from './ProductList';
import FilterSort from './FilterSort';
import productsData from './products.json'

const Parent = ()=> {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    // Filter products based on selected filters
    let filtered = [...products];
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    // Sorting functionality
    if (sortOrder === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [category, priceRange, sortOrder, products]);

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      <FilterSort
        setCategory={setCategory}
        setPriceRange={setPriceRange}
        setSortOrder={setSortOrder}
        category={category}
        priceRange={priceRange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Parent;
