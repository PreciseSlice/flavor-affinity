/* eslint-disable */
import * as actions from './index';
import { createStore } from 'redux';
import rootReducer from '../Reducers/index';
import { ingredients } from './testingData';

let store = createStore(rootReducer);

describe('actions testing', () => {
  
  describe('setAllIngredients', () => {
    
    it('should return a type of SET_ALL_INGREDIENTS with ingredients', () => {
      const expected = {
        type: 'SET_ALL_INGREDIENTS',
        ingredients
      };
      expect(actions.setAllIngredients(ingredients)).toEqual(expected);
    });

  });
  
});
