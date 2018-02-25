import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

export const PairingContainer = ({ pairingsObject }) => {
  const topFive = pairingsObject.topFive.map(ingredient => {
    return <Card data={ingredient} key={ingredient.id} />;
  });

  const middleFive = pairingsObject.middleFive.map(ingredient => {
    return <Card data={ingredient} key={ingredient.id} />;
  });

  const finalFive = pairingsObject.finalFive.map(ingredient => {
    return <Card data={ingredient} key={ingredient.id} />;
  });

  return (
    <div className="card-container">
      <h1>Pairings for: {pairingsObject.name}</h1>
      <div className="pairing-container">
        <div className="five-container">
          <div className="star-container">
            <img src={require('../../Assets/star.svg')} alt="star" />
            <img src={require('../../Assets/star.svg')} alt="star" />
            <img src={require('../../Assets/star.svg')} alt="star" />
          </div>
          {topFive}
        </div>
        <div className="five-container">
          <div className="star-container">
            <img src={require('../../Assets/star.svg')} alt="star" />
            <img src={require('../../Assets/star.svg')} alt="star" />
          </div>
          {middleFive}
        </div>
        <div className="five-container">
          <div className="star-container">
            <img src={require('../../Assets/star.svg')} alt="star" />
          </div>
          {finalFive}
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  pairingsObject: state.pairingsObject
});

export default connect(mapStateToProps, null)(PairingContainer);

PairingContainer.propTypes = {
  pairingsObject: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      topFive: PropTypes.array,
      middleFive: PropTypes.array,
      finalFive: PropTypes.array
    })
  ])
};
