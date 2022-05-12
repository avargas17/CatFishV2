import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Opening.css';


function Opening(){
    return(
<nav className='opening'>
<div className='opening-container'>
  <Link to='/' className='navbar-logo' >
    CatFish
    <i class='fab fa-typo3' />
  </Link>
  </div>
  </nav>
    )
}

export default Opening;