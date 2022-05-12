import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import Footer from './Footer'
import Cards from './Cards'



function Homepage() {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <Footer/>
    </>
  );
}
export default Homepage;