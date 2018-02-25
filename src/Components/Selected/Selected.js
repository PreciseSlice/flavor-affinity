import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import '../CardContainer/CardContainer.css';
import { NavLink } from 'react-router-dom';

export class Selected extends Component {
  render() {
    const { selectedCards } = this.props;

    if (selectedCards) {
      const cards = selectedCards.map(ingredient => {
        return <Card data={ingredient} key={ingredient.id} />;
      });
      return (
        <div className="card-container">
          <button>
            <NavLink to="/">Home</NavLink>
          </button>
          {cards}
        </div>
      );
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => ({
  selectedCards: state.selectedCards
});

export default connect(mapStateToProps, null)(Selected);

Selected.propTypes = {
  selectedCards: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  ])
};
