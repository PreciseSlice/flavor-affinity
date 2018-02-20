/* eslint-disable */
import * as actions from './index';
import { createStore } from 'redux';
import rootReducer from '../Reducers/index';
import { ingredients, suggestedIngredients } from './testingData';

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

  describe('setSuggestedIngredient', () => {
    it('should return a type of SET_SUGGESTED_INGREDIENTS with suggestedIngredients', () => {
      const expected = {
        type: 'SET_SUGGESTED_INGREDIENTS',
        suggestedIngredients
      };
    expect(actions.setSuggestedIngredients(suggestedIngredients)).toEqual(expected)
    })
  })
  
});
