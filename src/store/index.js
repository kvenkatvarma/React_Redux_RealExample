import {createStore,applyMiddleware} from "redux";
import allReducers from "../reducers";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromiseMiddleware from "redux-promise-middleware";

var store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk,reduxPromiseMiddleware)));
export default store;      