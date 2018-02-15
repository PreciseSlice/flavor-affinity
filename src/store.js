import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import thunk from 'redux-thunk';

export default () => createStore(rootReducer, applyMiddleware(thunk));
