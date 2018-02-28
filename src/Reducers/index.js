import { combineReducers } from 'redux';

export const allIngredientsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_ALL_INGREDIENTS':
    return [...action.ingredients];
  case 'SELECT_CARD':
    return state.map(ingredient => {
      if (ingredient.id === action.id) {
        return { ...ingredient, selected: !ingredient.selected };
      }
      return ingredient;
    });
  case 'CLEAR_SELECTED_CARDS':
    return state.map(ingredient => ({ ...ingredient, selected: false }));
  default:
    return state;
  }
};

export const suggestedIngredientsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_SUGGESTED_INGREDIENTS':
    return action.suggestedIngredients;
  default:
    return state;
  }
};

export const setPairingsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_PAIRINGS':
    return action.pairingsObject;
  case 'CLEAR_PAIRINGS':
    return (state = {});
  default:
    return state;
  }
};

export const setUserInputReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_USER_INPUT':
    return action.userInput;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  ingredients: allIngredientsReducer,
  suggestedIngredients: suggestedIngredientsReducer,
  pairingsObject: setPairingsReducer,
  userInput: setUserInputReducer
});

export default rootReducer;
