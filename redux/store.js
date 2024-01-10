import {applyMiddleware,compose, createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { combineReducers } from 'redux'
import { userReducer } from "./reducers/userReducer.js";
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMOSE || compose;

const reducers = combineReducers({
    user:userReducer,
})


const store = configureStore({reducer:reducers},
    composeEnhancers(applyMiddleware(thunk))
    )
export default store;