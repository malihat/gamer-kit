import React, {useState} from 'react';
import '../App.css';

const Ham = () => {
  const [toggle, setToggle] = useState(true);
  return (  
    <div>
      <div onClick={() => setToggle(!toggle)} >
        {toggle ? <i class="fas fa-bars fa-2x"></i> : <i class="fas fa-times fa-2x"></i>}  
      </div>
      <div className={toggle ? 'hide' : 'hamburgerMenu' } >
        
          <a href="/#"> Top 10 List </a>
          <a href="/#"> Game Play </a>
          <a href="/#"> Videos </a>
          <a href="/#"> Let's Play </a>
          <a href="/#"> Video Submission </a>
      </div>
    </div>
  );
}

export default Ham;