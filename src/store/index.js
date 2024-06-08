import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducer/index';
import Thunk from 'react-dom';

const store = configureStore(
    combineReducers(reducers),
    applyMiddleware(Thunk)
)

export default store