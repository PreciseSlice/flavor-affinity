import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ data }) => {
  const { name, image, description } = data;

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="#" />
      <div className="discription-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
