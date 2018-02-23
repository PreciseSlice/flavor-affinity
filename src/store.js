import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import thunk from 'redux-thunk';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => createStore(rootReducer, devTools, applyMiddleware(thunk));
