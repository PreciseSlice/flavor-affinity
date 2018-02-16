/* eslint-disable */
import * as actions from './index';
import { createStore } from 'redux';
import rootReducer from '../Reducers/index';
import { ingredients } from './testingData';

let store = createStore(rootReducer);

describe('actions testing', () => {
  
  describe('setIngredients', () => {
    
    it('should return a type of SET_INGREDIENT with ingredients', () => {
      const expected = {
        type: 'SET_INGREDIENT',
        ingredients
      };
      expect(actions.setIngredients(ingredients)).toEqual(expected);
    });

  });
  
});
