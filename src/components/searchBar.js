import React from 'react';
import '../App.css';

const SearchBar = () => {
  return (  
    <div className='searchBar'>
      <input type='text' placeholder='Search' /> 
      {/* <i className='fa-search'></i> */}
    </div>
  );
}
 
export default SearchBar;