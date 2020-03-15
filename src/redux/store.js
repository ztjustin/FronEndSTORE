import  { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import currentItem from './reducers/currentItem';
import suggestions from './reducers/suggestions';
import categories from './reducers/categories';
import products from './reducers/products';
import newproducts from './reducers/newproducts';


const reducer = combineReducers({
    suggestions,
    products,
    currentItem,
    categories,
    newproducts
});


const store = createStore(reducer, applyMiddleware(thunk,logger));


export default store;

