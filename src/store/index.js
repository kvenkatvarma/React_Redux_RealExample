import {createStore,applyMiddleware} from "redux";
import allReducers from "../reducers";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
var store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));
export default store;      