import React from 'react';

function Filter({ filterOptions, setFilterOptions }) {
  const handleTypeChange = (e) => {
    setFilterOptions(prev => ({ ...prev, type: e.target.value }));
  };

  const handlePrepTimeChange = (e) => {
    setFilterOptions(prev => ({ ...prev, prepTime: e.target.value }));
  };

  return (
    <div className="filter-bar">
      <select value={filterOptions.type} onChange={handleTypeChange}>
        <option value="">All Dishes</option>
        <option value="vegetarian">Veg</option>
        <option value="non-vegetarian">Non-Veg</option>
        <option value="Ice-cream">Ice-Creams</option>
        <option value="pizza">Pizza</option>
        <option value="cake">Cake</option>
        <option value="chinese">Chinese Food</option>
      </select>
      
      <select value={filterOptions.prepTime} onChange={handlePrepTimeChange}>
        <option value="">All Times</option>
        <option value="20">Under 20 minutes</option>
        <option value="30">Under 30 minutes</option>
        <option value="40">Under 40 minutes</option>
        <option value="60">Under 1 hour</option>
      </select>
    </div>
  );
}

export default Filter;
