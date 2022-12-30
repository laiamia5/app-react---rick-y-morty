import React from 'react'
import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import reducer from './reducer'


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    )
export default store;


