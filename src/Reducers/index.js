import { combineReducers } from 'redux';

export const allIngredientsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_ALL_INGREDIENTS':
    return [...action.ingredients];
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

export const selectedCardReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_SELECTED_CARD':
    if (!state.includes(action.selectedCards)) {
      return [...state, action.selectedCards];
    } else {
      return state.filter(card => card.id !== action.selectedCards.id);
    }
  case 'CLEAR_SELECTED_CARDS':
    return (state = []);
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
  selectedCards: selectedCardReducer,
  pairingsObject: setPairingsReducer,
  userInput: setUserInputReducer
});

export default rootReducer;
