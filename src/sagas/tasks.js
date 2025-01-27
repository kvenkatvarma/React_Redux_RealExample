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

export const createTasksWorkerSaga =function*(action){
   
    yield put({type:actionTypes.CREATE_TASK_PENDING});
    try
    {
        let response = yield axios.post("http://localhost:7000/tasks",action.payload);
        yield put({type:actionTypes.CREATE_TASK_FULFILLED,payload:response});     
    }
    catch(error)
    {
        yield put({type:actionTypes.CREATE_TASK_REJECTED,payload:error});     
    }
};

export const deleteTasksWorkerSaga =function*(action){
   
    yield put({type:actionTypes.DELETE_TASK_PENDING});
    try
    {
        yield axios.delete(`http://localhost:7000/tasks/${action.payload}`);
        yield put({type:actionTypes.DELETE_TASK_FULFILLED,payload:action.payload});     
    }
    catch(error)
    {
        yield put({type:actionTypes.DELETE_TASK_REJECTED,payload:error});     
    }
};