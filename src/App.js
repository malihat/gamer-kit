import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import SignIn from './components/signIn';
import Navbar from './components/navbar';
import Ham from './components/ham';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div>
      <div className='top-image'>
        <h1> Gamer Kit</h1>
      </div>
      <div className='header'>
        <Ham />
        <Navbar />
        <SignIn />
      </div>
      <div className='searchBar'>
          <SearchBar />
      </div>
    </div>


    // <BrowserRouter>
    //   <Route exact path='/' component={SignIn}  />
    //   <Route exact path='/' component={Navbar}  />
    //   <Route exact path='/' component={Ham}  />
    // </BrowserRouter>
  );
}

export default App;
