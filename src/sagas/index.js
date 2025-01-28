import {fetchTasksWorkerSaga,createTasksWorkerSaga,deleteTasksWorkerSaga} from "./tasks.js";
import { takeEvery,debounce, fork, throttle,all,take, cancel,put } from "redux-saga/effects";
import * as actionTypes from "../constants/action-types";

export const fetchTasksWatcherSaga = function*(){
    while(yield take(actionTypes.FETCH_TASKS)){
       let fetchProcess = yield fork(fetchTasksWorkerSaga);

       //cancel
       yield take(actionTypes.FETCH_TASKS_CANCEL);
       yield cancel(fetchProcess);
       
       yield put({type:actionTypes.FETCH_TASKS_REJECTED,payload:{message:"Cancelled"}});
    }
};

export const tasksWatcherSaga = function*(){

    //yield takeEvery(actionTypes.FETCH_TASKS,fetchTasksWorkerSaga);
     yield fork(fetchTasksWatcherSaga);
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