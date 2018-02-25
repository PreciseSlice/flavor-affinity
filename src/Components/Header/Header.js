import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = ({ selectedCards }) => {
  return (
    <div className="header-container">
      <h1>blend</h1>
      <div className="header-btn-container">
        <button>
          <NavLink to="/">Home</NavLink>
        </button>
        <button>
          <NavLink to="/selected">Ingredients: {selectedCards.length}</NavLink>
        </button>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  selectedCards: state.selectedCards
});

export default connect(mapStateToProps, null)(Header);

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
  ])
};
