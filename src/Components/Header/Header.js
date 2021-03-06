import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { clearSelectedCards, clearPairings } from '../../Actions/index';
import ReactTooltip from 'react-tooltip';

export const Header = ({ ingredients, clearSelectedCards, clearPairings }) => {
  const selectedCards = ingredients.filter(
    ingredients => ingredients.selected === true
  );

  return (
    <div className="header-container">
      <ReactTooltip />
      <h1>blend</h1>
      <h2>serving inspiration daily</h2>
      <div className="header-btn-container">
        <button
          onClick={() => {
            clearSelectedCards();
            clearPairings();
          }}
        >
          <NavLink to="/">home</NavLink>
        </button>
        <button data-tip="compare selected ingredients">
          <NavLink to="/selected">ingredients: {selectedCards.length}</NavLink>
        </button>
        <button
          onClick={() => {
            clearPairings();
          }}
        >
          clear pairings
        </button>
        <button
          onClick={() => {
            clearSelectedCards();
          }}
        >
          clear selections
        </button>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  ingredients: state.ingredients
});

export const mapDispatchToProps = dispatch => ({
  clearSelectedCards: () => dispatch(clearSelectedCards()),
  clearPairings: () => dispatch(clearPairings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  ingredients: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
      })
    )
  ]),

  clearSelectedCards: PropTypes.func.isRequired,
  clearPairings: PropTypes.func.isRequired
};
