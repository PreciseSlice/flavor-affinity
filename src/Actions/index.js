export const setAllIngredients = ingredients => ({
  type: 'SET_ALL_INGREDIENTS',
  ingredients
});

export const setSuggestedIngredients = suggestedIngredients => ({
  type: 'SET_SUGGESTED_INGREDIENTS',
  suggestedIngredients
});

export const setSelectedCards = selectedCards => ({
  type: 'SET_SELECTED_CARD',
  selectedCards
});

export const clearSelectedCards = () => ({
  type: 'CLEAR_SELECTED_CARDS'
});

export const setPairings = pairingsObject => ({
  type: 'SET_PAIRINGS',
  pairingsObject
});

export const clearPairings = () => ({
  type: 'CLEAR_PAIRINGS'
});

export const setUserInput = userInput => ({
  type: 'SET_USER_INPUT',
  userInput
});
