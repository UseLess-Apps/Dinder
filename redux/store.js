import { createStore, combineReducers } from 'redux';
import { mainReducer } from './reducer';

const configureStore = () => {
  return createStore(mainReducer);
}

export default configureStore;