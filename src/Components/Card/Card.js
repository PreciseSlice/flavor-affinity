import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Card.css';
import { setSelectedCards, setPairings } from '../../Actions/index';
import { getParings } from '../../Helpers/apiCalls';

export const Card = ({
  data,
  selectedCards,
  setSelectedCards,
  setPairings
}) => {
  const { name, image, description, id } = data;

  // this is merging two things
  // add is one thing and remove is another
  // should be boolean property of card not an array
  // logic could be in action
  const handleSelect = data => {
    if (!selectedCards.includes(data)) {
      const newCards = [...selectedCards, data];
      setSelectedCards(newCards);
    } else {
      const newCards = [selectedCards.filter(card => card !== data)];
      setSelectedCards(newCards);
    }
  };

  const handlePairing = async (id, name) => {
    const pairings = await getParings(id, name);
    setPairings(pairings);
  };

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="ingredient" />
      <div>
        <button onClick={() => handleSelect(data)}>select</button>
        <button className="pairing-btn" onClick={() => handlePairing(id, name)}>
          pairings
        </button>
      </div>
      <div className="discription-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  selectedCards: state.selectedCards
});

export const mapDispatchToProps = dispatch => ({
  setSelectedCards: selectedCards => dispatch(setSelectedCards(selectedCards)),
  setPairings: pairingsObject => dispatch(setPairings(pairingsObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
