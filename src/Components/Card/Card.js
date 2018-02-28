import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Card.css';
import { setPairings, selectCard } from '../../Actions/index';
import { getParings } from '../../Helpers/apiCalls';

export const Card = ({ data, selectCard, setPairings, selectedStyling }) => {
  const { name, image, description, id } = data;

  const handlePairing = async (id, name) => {
    const pairings = await getParings(id, name);
    setPairings(pairings);
  };

  return (
    <div className={'card ' + selectedStyling}>
      <h1>{name}</h1>
      <img src={image} alt="ingredient" />
      <div>
        <button
          title="select for multi-ingredient pairing"
          onClick={() => selectCard(id)}
        >
          select
        </button>
        <button
          title="get this ingredient's pairings now"
          className="pairing-btn"
          onClick={() => handlePairing(id, name)}
        >
          pairings
        </button>
      </div>
      <div className="discription-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  setPairings: pairingsObject => dispatch(setPairings(pairingsObject)),
  selectCard: id => dispatch(selectCard(id))
});

export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,

  selectCard: PropTypes.func.isRequired,
  setPairings: PropTypes.func.isRequired,
  selectedStyling: PropTypes.string
};
