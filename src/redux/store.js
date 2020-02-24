import  { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import currentItem from './reducers/currentItem';
import suggestions from './reducers/suggestions';
import products from './reducers/products';


const reducer = combineReducers({
    suggestions,
    products,
    currentItem
});


const store = createStore(reducer, applyMiddleware(thunk));


export default store;

