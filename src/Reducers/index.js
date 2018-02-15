import { combineReducers } from 'redux';

const ingredientsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_INGREDIENT':
      console.log('SET_INGREDIENT', action);
      return state  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  ingredients: ingredientsReducer
});

export default rootReducer;