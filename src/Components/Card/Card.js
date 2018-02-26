import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Card.css';
import { setSelectedCards, setPairings } from '../../Actions/index';
import { getParings } from '../../Helpers/apiCalls';

export const Card = ({ data, setSelectedCards, setPairings, selected }) => {
  const { name, image, description, id } = data;

  const handlePairing = async (id, name) => {
    const pairings = await getParings(id, name);
    setPairings(pairings);
  };

  return (
    <div className={'card ' + selected}>
      <h1>{name}</h1>
      <img src={image} alt="ingredient" />
      <div>
        <button
          title="select for multi-ingredient pairing"
          onClick={() => setSelectedCards(data)}
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
  setSelectedCards: selectedCards => dispatch(setSelectedCards(selectedCards)),
  setPairings: pairingsObject => dispatch(setPairings(pairingsObject))
});

export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,

  setSelectedCards: PropTypes.func.isRequired,
  setPairings: PropTypes.func.isRequired,
  selected: PropTypes.string
};
