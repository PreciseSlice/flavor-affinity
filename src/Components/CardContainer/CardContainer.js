import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import PairingContainer from '../PairingContainer/PairingContainer';

export class CardContainer extends Component {
  render() {
    const {
      allIngredients,
      suggestedIngredients,
      pairingsObject,
      selectedCards
    } = this.props;

    const filtered = allIngredients.filter(ingredient => {
      return suggestedIngredients.includes(ingredient.name);
    });

    if (allIngredients && !filtered.length && !pairingsObject.topFive) {
      const cards = allIngredients.map(ingredient => {
        const selected = selectedCards.includes(ingredient) ? 'selected' : '';

        return (
          <Card data={ingredient} key={ingredient.id} selected={selected} />
        );
      });

      return <div className="card-container">{cards}</div>;
    } else if (filtered.length) {
      const cards = filtered.map(ingredient => {
        
        const selected = selectedCards.includes(ingredient) ? 'selected' : '';
        return (
          <Card data={ingredient} key={ingredient.id} selected={selected} />
        );
      });

      return <div className="card-container">{cards}</div>;
    } else if (pairingsObject.topFive) {
      return <PairingContainer />;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => ({
  allIngredients: state.ingredients,
  suggestedIngredients: state.suggestedIngredients,
  pairingsObject: state.pairingsObject,
  selectedCards: state.selectedCards
});

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  allIngredients: PropTypes.oneOfType([
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

  suggestedIngredients: PropTypes.oneOfType([
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

  pairingsObject: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      topFive: PropTypes.array,
      middleFive: PropTypes.array,
      finalFive: PropTypes.array
    })
  ]),

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
