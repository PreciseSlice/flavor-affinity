/* eslint-disable */
import * as actions from './index';
import { createStore } from 'redux';
import rootReducer from '../Reducers/index';
import {
  ingredients,
  suggestedIngredients,
  selectedCards,
  pairingsObject
} from './testingData';

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
      expect(actions.setSuggestedIngredients(suggestedIngredients)).toEqual(
        expected
      );
    });
  });

  describe('setSelectCards', () => {
    it('should return a type of SET_SELECTED_CARD with selectedCards', () => {
      const expected = {
        type: 'SET_SELECTED_CARD',
        selectedCards
      };
      expect(actions.setSelectedCards(selectedCards)).toEqual(expected);
    });
  });

  describe('setPairings', () => {
    it('should return a type of SET_SUGGESTED_INGREDIENTS with pairingsObject', () => {
      const expected = {
        type: 'SET_PAIRINGS',
        pairingsObject
      };
      expect(actions.setPairings(pairingsObject)).toEqual(expected);
    });
  });
});
