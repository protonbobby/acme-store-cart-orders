import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import orders from './Reducers/orders';
import products from './Reducers/products';

const reducer = combineReducers({
  orders,
  products,
});

export default createStore(reducer, applyMiddleware(thunk, logger));
