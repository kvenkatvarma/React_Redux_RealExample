import * as actionTypes from "../constants/action-types";

export const fetchTasks =()=>async(dispatch,getState)=>{
    var response =  await fetch("http://localhost:7000/tasks",{
      method:"GET"
     });   
         var resp= await response.json();             
          dispatch ({
           type:actionTypes.FETCH_TASKS,payload:resp
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