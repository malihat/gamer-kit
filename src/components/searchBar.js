import React from 'react';
import '../App.css';

const SearchBar = () => {
  return (  
  <div className="ui icon input">
    <input type="text" placeholder="Search..."/>
    <i aria-hidden="true" class="search icon"></i>
  </div>

  );
}
 
export default SearchBar;