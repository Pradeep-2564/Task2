import React from 'react'

const SearchBar = ({searchItems, setSearchItems}) => {
  return (
    <div>
      <input 
        type="text" 
        value={searchItems}
        onChange={(e)=>setSearchItems(e.target.value)}
        placeholder='Search recipes...'
      />
    </div>
  )
}

export default SearchBar
