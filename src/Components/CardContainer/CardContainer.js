import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import PairingContainer from '../PairingContainer/PairingContainer';
import LoadingCards from '../LoadingCards/LoadingCards';

export class CardContainer extends Component {
  render() {
    const {
      allIngredients,
      suggestedIngredients,
      pairingsObject,
      selectedCards,
      userInput
    } = this.props;

    const filtered = allIngredients.filter(ingredient => {
      return suggestedIngredients.includes(ingredient.name);
    });

    const exactMatch = allIngredients.find(
      ingredient => ingredient.name === userInput
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

    // this could become a component
    if (exactMatch) {
      const selected = selectedCards.includes(exactMatch) ? 'selected' : '';
      return (
        <div className="card-container">
          <Card data={exactMatch} selected={selected} />
        </div>
      );
    }

    // this could become a component
    const cards = ingredients.map(ingredient => {
      const selected = selectedCards.includes(ingredient) ? 'selected' : '';
      return <Card data={ingredient} key={ingredient.id} selected={selected} />;
    });

    return <div className="card-container">{cards}</div>;
  }
}

export const mapStateToProps = state => ({
  allIngredients: state.ingredients,
  suggestedIngredients: state.suggestedIngredients,
  pairingsObject: state.pairingsObject,
  selectedCards: state.selectedCards,
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

  userInput : PropTypes.string
};
