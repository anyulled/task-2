/**
 * this is a store, it can hold many reducers and dispatching
 * an action against / on the store will make redux pass the action
 * to all of the reducers that were registerd with createStore()
 */

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import lotteryReducer from "../reducers/lottery";

export default createStore(lotteryReducer, applyMiddleware(thunk));