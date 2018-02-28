export const setAllIngredients = ingredients => ({
  type: 'SET_ALL_INGREDIENTS',
  ingredients
});

export const selectCard = id => ({
  type: 'SELECT_CARD',
  id
});

export const clearSelectedCards = () => ({
  type: 'CLEAR_SELECTED_CARDS'
});

export const setSuggestedIngredients = suggestedIngredients => ({
  type: 'SET_SUGGESTED_INGREDIENTS',
  suggestedIngredients
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
