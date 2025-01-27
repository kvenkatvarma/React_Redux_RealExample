import * as actionTypes from "../constants/action-types";
import axios from "axios";

export const fetchTasks =()=>({
  type:"FETCH_TASKS",payload:axios.get("http://localhost:7000/tasks")}
);

 export const createTask =(newTask)=>({
  type:"CREATE_TASK",payload:axios.post("http://localhost:7000/tasks",newTask)});

export const deleteTask =(taskId)=>({
          type:"DELETE_TASK",payload:axios.delete(`http://localhost:7000/tasks/${taskId}`)});
           

