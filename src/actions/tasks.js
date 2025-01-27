import * as actionTypes from "../constants/action-types";


export const fetchTasks =()=>({
  type: actionTypes.FETCH_TASKS}
);

 export const createTask =(newTask)=>({
  type:actionTypes.CREATE_TASK,payload:newTask});

export const deleteTask =(taskId)=>({
          type:actionTypes.DELETE_TASK,payload:taskId});
           

