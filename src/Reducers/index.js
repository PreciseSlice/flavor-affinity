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
      return action.suggestedIngredients 
    default:
      return state;
    }
}

const rootReducer = combineReducers({
  ingredients: allIngredientsReducer,
  suggestedIngredients: suggestedIngredientsReducer
});

export default rootReducer;
