/* eslint-disable */
import { combineReducers, createStore } from 'redux';
import rootReducer, { ingredientsReducer } from './index.js';

describe('RootReducer test', () => {
  const rootReducer = combineReducers({ ingredientsReducer });
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
      ingredientsReducer: []
    };
  });

  it('should have a default store which equals an empty array', () => {
    expect(store.getState().ingredientsReducer).toEqual(
      ingredientsReducer([], {})
    );
  });

  it('ingredient reducer should handle SET_INGREDIENT action type and update store', () => {
    expect(store.getState()).toEqual(expectedStore);

    const ingredientsAction = { type: 'SET_INGREDIENT', ingredients: mockData };
    store.dispatch(ingredientsAction);
    expect(store.getState().ingredientsReducer).toEqual(ingredientsReducer([], ingredientsAction))
  });
  
});
