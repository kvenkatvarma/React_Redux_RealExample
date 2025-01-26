import {createStore} from "redux";
import allReducers from "../reducers";

var store = createStore(allReducers);
export default store;