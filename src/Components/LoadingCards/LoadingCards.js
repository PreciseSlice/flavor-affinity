import React from 'react';
import fruitSwirl from '../../Assets/fruit-swirl.gif';

const LoadingCards = () => {
  return (
    <div className="card-container">
      <div className="loading-container">
        <h1>loading ingredients...</h1>
        <img src={fruitSwirl} alt="swirling fruit" />
      </div>
    </div>
  );
};

export default LoadingCards;
