import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import thunk from 'redux-thunk';

export default () =>
  createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
