import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends Component {
  render() {
    const { ingredientsArray } = this.props;

    if (ingredientsArray.ingredients) {
      const renderCards = ingredientsArray.ingredients.map(ingredient => {
        return <Card data={ingredient} key={ingredient.id} />;
      });

      return <div className="card-container">{renderCards}</div>;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => ({
  ingredientsArray: state.ingredients
});

export default connect(mapStateToProps, null)(CardContainer);
