import {createStore,applyMiddleware} from "redux";
import allReducers from "../reducers";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromiseMiddleware from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";

let saga = createSagaMiddleware();
let middleware =[thunk,saga,reduxPromiseMiddleware];

var store = createStore(allReducers,{},composeWithDevTools(applyMiddleware(...middleware)));
//invoke root saga
saga.run(rootSaga);
export default store;      