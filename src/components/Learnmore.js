import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function Learnmore() {
  return (
    <div className='hero-container'>
      <video src='/videos/dog-video.mp4' autoPlay loop muted />
      <p>Find your Purrrfect mate today</p>
      <div className="hero-bts">
      <a href='/Learnmore' role="button" className="btn btn--primary btn-lg">Learn More</a>
      <a href='/CreateAccount' role="button" className="btn btn--secondary btn-lg">Create an Account</a>
      </div>
    </div>
  );
}

export default Learnmore;