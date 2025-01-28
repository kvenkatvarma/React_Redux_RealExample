import {fetchTasksWorkerSaga,createTasksWorkerSaga,deleteTasksWorkerSaga} from "./tasks.js";
import { takeEvery,debounce, fork, throttle,all,take } from "redux-saga/effects";
import * as actionTypes from "../constants/action-types";

export const tasksWatcherSaga = function*(){
    yield takeEvery(actionTypes.FETCH_TASKS,fetchTasksWorkerSaga);

    yield throttle(1000 * 30,actionTypes.CREATE_TASK,createTasksWorkerSaga);

    yield take(actionTypes.CREATE_TASK);

    yield takeEvery(actionTypes.DELETE_TASK,deleteTasksWorkerSaga);
};

export const employeesWatcherSaga = function*(){

};

export const rootSaga = function*(){
    console.log("rootsaga invoked");
    yield all([
        fork(tasksWatcherSaga),
        fork(employeesWatcherSaga)
    ]);
       
};