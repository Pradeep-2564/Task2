import React from 'react';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search recipes..."
    />
  );
}

export default Search;
