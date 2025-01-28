import { createTask,deleteTask,fetchTasks,cancelFetchTasks } from "./tasks";

var actions ={createTask:createTask,deleteTask:deleteTask,fetchTasks:fetchTasks,cancelFetchTasks:cancelFetchTasks};
export default actions;