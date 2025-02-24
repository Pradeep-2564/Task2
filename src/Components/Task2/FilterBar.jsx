import React from 'react'

const FilterBar = ({filterOptions, setFilterOptions }) => {

  const handelTypeChange = (e)=>{
    setFilterOptions(prev => ({ ...prev, prepTime: e.target.value }));
  };

  const handelprepTimeChange = (e) =>{
    setFilterOptions(prev => ({ ...prev, prepTime: e.target.value }));
  };

  return (
    <div className='filter-bar'>
      <select value={filterOptions.type} onChange={handelTypeChange}>
        <option value="">All Types</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
      </select>

      <select value={filterOptions.prepTime} onChange={handelprepTimeChange}>
        <option value="">All Times</option>
        <option value="30">Under 30 minutes</option>
        <option value="60">Under 1 hour</option>
      </select>
    </div>
  )
}

export default FilterBar
