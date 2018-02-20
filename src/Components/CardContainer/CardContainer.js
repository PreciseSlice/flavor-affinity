import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class CardContainer extends Component {
  render() {
    const { ingredients } = this.props.ingredientsObject;

    if (ingredients) {
      const renderCards = ingredients.map(ingredient => {
        return <Card data={ingredient} key={ingredient.id} />;
      });

      return <div className="card-container">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => ({
  ingredientsObject: state.ingredients
});

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  ingredientsObject: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};
