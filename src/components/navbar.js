import React from 'react';
import '../App.css';
import SearchBar from './searchBar';

const Navbar = () => {
  return (  
    <div className='nav'>
      <a href="/#"> Home </a>
      <a href="/#"> Reviews </a>
      <a href="/#"> About Us </a>
      <a href="/#"> Contact </a>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
 
export default Navbar;