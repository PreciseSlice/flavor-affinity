import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Card.css';
import { setSelectedCards } from '../../Actions/index'

export const Card = ({ data, selectedCards, setSelectedCards }) => {
  const { name, image, description } = data;

  // this is merging two things 
  // add is one thing and remove is another
  // should be boolean property of card not an array 
  // logic could be in action
  const clickHandler = data => {
    if (!selectedCards.includes(data)) {
      const newCards = [...selectedCards, data];
      setSelectedCards(newCards)
    } else {
      const newCards = [
        selectedCards.filter(card => card !== data)
      ];
      setSelectedCards(newCards)
    }
  };

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="ingredient" />
      <button onClick={() => clickHandler(data)}>select</button>
      <div className="discription-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  selectedCards: state.selectedCards
})

export const mapDispatchToProps = dispatch => ({
  setSelectedCards: selectedCards => dispatch(setSelectedCards(selectedCards))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
