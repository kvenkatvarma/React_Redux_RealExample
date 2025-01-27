import {fetchTasksWorkerSaga,createTasksWorkerSaga,deleteTasksWorkerSaga} from "./tasks.js";
import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../constants/action-types";

export const rootSaga = function*(){
    console.log("rootsaga invoked");
     yield takeEvery(actionTypes.FETCH_TASKS,fetchTasksWorkerSaga);

     yield takeEvery(actionTypes.CREATE_TASK,createTasksWorkerSaga);

     yield takeEvery(actionTypes.DELETE_TASK,deleteTasksWorkerSaga);

};