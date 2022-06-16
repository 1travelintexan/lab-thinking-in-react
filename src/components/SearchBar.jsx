import React, { useState } from 'react';

function SearchBar({ search, onSearch, checked, onChecked }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  function handleCheck(e) {
    onChecked(!checked);
  }
  return (
    <div className="search-div">
      <input value={search} type="text" onChange={handleSearch} />
      <div className="checkbox">
        <h5>Show items that are in stock</h5>
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheck(e);
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
