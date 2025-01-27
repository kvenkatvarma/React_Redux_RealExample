import * as actionTypes from "../constants/action-types";
import axios from "axios";

export const fetchTasks =()=>async(dispatch)=>{

    dispatch({type:actionTypes.FETCH_TASKS_REQUEST});

    try{
        var response =  await axios.get("http://localhost:7000/tasks");
        dispatch ({
          type:actionTypes.FETCH_TASKS_SUCCESS,payload:response.data
        });   
    }
    catch(err)
    {
      dispatch ({
        type:actionTypes.FETCH_TASKS_ERROR,payload:err
      }); 
    }        
 };

 export const createTask =(newTask)=>async(dispatch)=>{

  dispatch({type:actionTypes.CREATE_TASK_REQUEST});

  try{
      var response =  await axios.post("http://localhost:7000/tasks",newTask);
      dispatch ({
        type:actionTypes.CREATE_TASK_SUCCESS,payload:response.data
      });   
  }
  catch(err)
  {
    dispatch ({
      type:actionTypes.CREATE_TASK_ERROR,payload:err
    }); 
  }        
};

export const deleteTask =(taskId)=>async(dispatch)=>{

  dispatch({type:actionTypes.DELETE_TASK_REQUEST});

  try{
        await axios.delete(`http://localhost:7000/tasks/${taskId}`);
      dispatch ({
        type:actionTypes.DELETE_TASK_SUCCESS,payload:taskId
      });   
  }
  catch(err)
  {
    dispatch ({
      type:actionTypes.DELETE_TASK_ERROR,payload:err
    }); 
  }        
};

