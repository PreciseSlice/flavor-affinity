import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import PairingContainer from '../PairingContainer/PairingContainer';
import LoadingCards from '../LoadingCards/LoadingCards';
import Cards from '../Cards/Cards';

export class CardContainer extends Component {
  render() {
    const {
      allIngredients,
      suggestedIngredients,
      pairingsObject,
      userInput
    } = this.props;

    const filtered = allIngredients.filter(ingredient => {
      return suggestedIngredients.includes(ingredient.name);
    });

    const exactMatch = allIngredients.find(
      ingredient => ingredient.name === userInput
    );

    const selectedCards = allIngredients.filter(
      ingredients => ingredients.selected === true
    );

    const isLoading = !allIngredients.length;
    const isFiltered = filtered.length;

    let ingredients = allIngredients;

    if (isFiltered) {
      ingredients = filtered;
    }

    if (isLoading) {
      return <LoadingCards />;
    }

    if (pairingsObject.topFive) {
      return <PairingContainer />;
    }

    if (exactMatch) {
      const selectedStyling = selectedCards.includes(exactMatch)
        ? 'selected'
        : '';
      return (
        <div className="card-container">
          <Card data={exactMatch} selectedStyling={selectedStyling} />
        </div>
      );
    }
    return (
      <div className="card-container">
        <Cards ingredients={ingredients} allIngredients={allIngredients} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  allIngredients: state.ingredients,
  suggestedIngredients: state.suggestedIngredients,
  pairingsObject: state.pairingsObject,
  userInput: state.userInput
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
  ]),

  userInput: PropTypes.string
};
