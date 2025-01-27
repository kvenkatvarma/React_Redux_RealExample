import axios from "axios";
import * as actionTypes from "../constants/action-types";
import { put } from "redux-saga/effects";


export const fetchTasksWorkerSaga =function*(){
   
    yield put({type:actionTypes.FETCH_TASKS_PENDING});
    try
    {
        let response = yield axios.get("http://localhost:7000/tasks");
        yield put({type:actionTypes.FETCH_TASKS_FULFILLED,payload:response});     
    }
    catch(error)
    {
        yield put({type:actionTypes.FETCH_TASKS_REJECTED,payload:error});     
    }
};