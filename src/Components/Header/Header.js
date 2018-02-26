import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { clearSelectedCards, clearPairings } from '../../Actions/index';

export const Header = ({
  selectedCards,
  clearSelectedCards,
  clearPairings
}) => {
  return (
    <div className="header-container">
      <h1>blend</h1>
      <div className="header-btn-container">
        <button
          title="click to go home"
          onClick={() => {
            clearSelectedCards();
            clearPairings();
          }}
        >
          <NavLink to="/">home</NavLink>
        </button>
        <button>
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
  selectedCards: state.selectedCards
});

export const mapDispatchToProps = dispatch => ({
  clearSelectedCards: () => dispatch(clearSelectedCards()),
  clearPairings: () => dispatch(clearPairings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  selectedCards: PropTypes.oneOfType([
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
