import * as actionTypes from "../constants/action-types";
import axios from "axios";
export const fetchTasks =()=>async(dispatch,getState)=>{
         var response =  await axios.get("http://localhost:7000/tasks");                 
          dispatch ({
           type:actionTypes.FETCH_TASKS,payload:response.data
          });       
 };

export const createTask =(newTask)=>{
   return {
     type:actionTypes.CREATE_TASK,payload:newTask
   };
};

export const deleteTask =(taskId)=>{
    return {
      type:actionTypes.DELETE_TASK,payload:taskId
    };
 };