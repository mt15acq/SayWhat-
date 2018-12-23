import { combineReducers } from 'redux';
import homeReducer from '../src/helper/homeReducer';

export default function getRootReducer() {
  return combineReducers({
    homeReducer
  });
}
