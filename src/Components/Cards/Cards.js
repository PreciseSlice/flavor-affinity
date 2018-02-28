import React from 'react';
import Card from '../Card/Card';

const Cards = ({ ingredients, allIngredients }) => {
  const selectedCards = allIngredients.filter(
    ingredients => ingredients.selected === true
  );

  return ingredients.map(ingredient => {
    const selectedStyling = selectedCards.includes(ingredient)
      ? 'selected'
      : '';

    return (
      <Card
        data={ingredient}
        key={ingredient.id}
        selectedStyling={selectedStyling}
      />
    );
  });
};

export default Cards;
