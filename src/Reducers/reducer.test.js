/* eslint-disable */
import { combineReducers, createStore } from 'redux';
import rootReducer, { allIngredientsReducer } from './index.js';

describe('RootReducer test', () => {
  const rootReducer = combineReducers({ allIngredientsReducer });
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
  let expectedStore;
  let store;

  beforeEach(() => {
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

    const ingredientsAction = { type: 'SET_ALL_INGREDIENTS', ingredients: mockData };
    store.dispatch(ingredientsAction);
    expect(store.getState().allIngredientsReducer).toEqual(allIngredientsReducer([], ingredientsAction))
  });
  
});
