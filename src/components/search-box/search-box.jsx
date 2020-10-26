import React from 'react';
import './search-box.css';

const SearchBox = ({handleChange}) => (
    <input
        className="search" 
        type="seacrh" 
        placeholder="search input" 
        onChange={handleChange}
    />
)

export default SearchBox;