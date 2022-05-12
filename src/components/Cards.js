import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1> Dont trust us??</h1>
      <h1>Check out these testimonials</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Dog-1.jpg'
              text='Met my purrfect match on Catfish'
              label='Cat/Dog'
              path='/'
            />
            <CardItem
              src='images/couple-1.jpg'
              text='My pets found a Play mate and I found a Soul mate'
              label='Cat/Dog'
              path='/'
            />
            <CardItem
              src='images/Senior-1.jpg'
              text='Love does not have an age'
              label='Dog'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;