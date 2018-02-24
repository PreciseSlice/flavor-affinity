export const setAllIngredients = ingredients => ({
  type: 'SET_ALL_INGREDIENTS',
  ingredients
});

export const setSuggestedIngredients = suggestedIngredients => ({
  type: 'SET_SUGGESTED_INGREDIENTS',
  suggestedIngredients
})

export const setSelectedCards = selectedCards => ({
  type:  'SET_SELECTED_CARD',
  selectedCards
})

export const setPairings = pairingsObject => ({
  type: 'SET_PAIRINGS',
  pairingsObject
})
