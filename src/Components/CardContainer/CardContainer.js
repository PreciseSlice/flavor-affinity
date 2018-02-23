import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

export class CardContainer extends Component {
  render() {
    const { allIngredients, suggestedIngredients } = this.props;

    const filtered = allIngredients.filter(ingredient => {
      return suggestedIngredients.includes(ingredient.name);
    });

    if (allIngredients && !filtered.length) {
      const cards = allIngredients.map(ingredient => {
        return <Card data={ingredient} key={ingredient.id} />;
      });

      return <div className="card-container">{cards}</div>;
    } else if (filtered.length) {
      const cards = filtered.map(ingredient => {
        return <Card data={ingredient} key={ingredient.id} />;
      });

      return <div className="card-container">{cards}</div>;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => ({
  allIngredients: state.ingredients,
  suggestedIngredients: state.suggestedIngredients
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
        name: PropTypes.string.isRequired
      })
    )
  ])
};
