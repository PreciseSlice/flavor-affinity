import { combineReducers } from 'redux';

export const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_INGREDIENT':
    console.log('SET_INGREDIENT', action);
    return { ingredients: [...state, action.ingredients] };
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  ingredients: ingredientsReducer
});

export default rootReducer;
