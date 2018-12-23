import { createStore, applyMiddleware } from 'redux';
import getRootReducer from './reducers';
import thunk from 'redux-thunk';

export default function getStore() {
  let store = createStore(
    getRootReducer(),
    undefined,
    applyMiddleware(thunk)
  );
  return store;
}
