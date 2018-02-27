/* eslint-disable */
import { combineReducers, createStore } from 'redux';
import rootReducer, {
  allIngredientsReducer,
  suggestedIngredientsReducer,
  selectedCardReducer,
  setPairingsReducer,
  setUserInputReducer
} from './index.js';

describe('Reducers', () => {
  const mockData = [
    {
      id: 94,
      name: 'Apple (fresh)',
      preparation: 'fresh'
    },
    {
      id: 6176,
      name: 'Artichoke (cooked)',
      preparation: 'cooked'
    }
  ];
  let rootReducer;
  let expectedStore;
  let store;

  describe('allIngredientsReducer', () => {
    beforeEach(() => {
      rootReducer = combineReducers({ allIngredientsReducer });
      store = createStore(rootReducer);
      expectedStore = {
        allIngredientsReducer: []
      };
    });

    it('should have a default store which equals an empty array', () => {
      expect(store.getState().allIngredientsReducer).toEqual(
        allIngredientsReducer([], {})
      );
    });

    it('ingredient reducer should handle SET_ALL_INGREDIENTS action type and update store', () => {
      expect(store.getState()).toEqual(expectedStore);

      const ingredientsAction = {
        type: 'SET_ALL_INGREDIENTS',
        ingredients: mockData
      };
      store.dispatch(ingredientsAction);
      expect(store.getState().allIngredientsReducer).toEqual(
        allIngredientsReducer([], ingredientsAction)
      );
    });
  });

  describe('suggestedIngredientsReducer', () => {
    beforeEach(() => {
      rootReducer = combineReducers({ suggestedIngredientsReducer });
      store = createStore(rootReducer);
      expectedStore = {
        suggestedIngredientsReducer: []
      };
    });
    it('should have a default store which equals an empty array', () => {
      expect(store.getState().suggestedIngredientsReducer).toEqual(
        suggestedIngredientsReducer([], {})
      );
    });

    it('suggestedIngredientsReducer should handle SET_SUGGESTED_INGREDIENTS action type and update store', () => {
      expect(store.getState()).toEqual(expectedStore);

      const suggestedIngredientsAction = {
        type: 'SET_SUGGESTED_INGREDIENTS',
        suggestedIngredients: mockData
      };
      store.dispatch(suggestedIngredientsAction);
      expect(store.getState().suggestedIngredientsReducer).toEqual(
        suggestedIngredientsReducer([], suggestedIngredientsAction)
      );
    });
  });

  describe('selectedCardReducer', () => {
    beforeEach(() => {
      rootReducer = combineReducers({ selectedCardReducer });
      store = createStore(rootReducer);
      expectedStore = {
        selectedCardReducer: []
      };
    });
    it('should have a default store which equals an empty array', () => {
      expect(store.getState().selectedCardReducer).toEqual(
        selectedCardReducer([], {})
      );
    });

    it('selectedCardReducer should handle SET_SELECTED_CARD action type and update store', () => {
      expect(store.getState()).toEqual(expectedStore);

      const selectedCardsAction = {
        type: 'SET_SELECTED_CARD',
        selectedCards: mockData
      };
      store.dispatch(selectedCardsAction);
      expect(store.getState().selectedCardReducer).toEqual(
        selectedCardReducer([], selectedCardsAction)
      );
    });
  });

  describe('setPairingsReducer', () => {
    beforeEach(() => {
      rootReducer = combineReducers({ setPairingsReducer });
      store = createStore(rootReducer);
      expectedStore = {
        setPairingsReducer: {}
      };
    });
    it('should have a default store which equals an empty object', () => {
      expect(store.getState().setPairingsReducer).toEqual(
        setPairingsReducer({}, {})
      );
    });

    it('setPairingsReducer should handle SET_PAIRINGS action type and update store', () => {
      expect(store.getState()).toEqual(expectedStore);

      const setPairingsAction = {
        type: 'SET_PAIRINGS',
        pairingsObject: mockData
      };
      store.dispatch(setPairingsAction);
      expect(store.getState().setPairingsReducer).toEqual(
        setPairingsReducer([], setPairingsAction)
      );
    });
  });

  describe('setUserInputReducer', () => {
    beforeEach(() => {
      rootReducer = combineReducers({ setUserInputReducer });
      store = createStore(rootReducer);
      expectedStore = {
        setUserInputReducer: ''
      };
    });
    it('should have a default store which equals an empty string', () => {
      expect(store.getState().setUserInputReducer).toEqual(
        setUserInputReducer('', {})
      );
    });

    it('setUserInputReducer should handle SET_USER_INPUT action type and update store', () => {
      expect(store.getState()).toEqual(expectedStore);

      const setUserInputAction = {
        type: 'SET_USER_INPUT',
        userInput: 'abc'
      };
      store.dispatch(setUserInputAction);
      expect(store.getState().setUserInputReducer).toEqual(
        setUserInputReducer([], setUserInputAction)
      );
    });
  });
});
