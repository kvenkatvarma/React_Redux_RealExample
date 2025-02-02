import React,{useState,useEffect} from "react";
import "./Tasks.css";
import Collapsible from "../Collapsable/collapsable";
import { useSelector,useDispatch } from "react-redux";
import actions from "../../actions";
import { toDisplayableDateFormat } from "../../utils";

function Tasks(){
 
  
   let [taskTitle,setTaskTitle] =useState("");
   let [taskDateTime,setTaskDateTime] =useState("");
   let [search,setSearch] =useState("");

   let dispatch= useDispatch();

   useEffect(()=>{
     dispatch(actions.fetchTasks()) //it will invoke worker sage of fetchtasks
   },[dispatch]);

   let tasks = useSelector(state=>state.tasks);
   let filteredTasks =[];
   if(tasks && tasks.data.length > 0)
   {
     filteredTasks = tasks.data.filter(task=>task.taskTitle.toLowerCase().indexOf(search.toLowerCase()) >=0);
   }
 

    let [isNewTaskOpen,setIsNewTaskOpen] = useState(false);
    
    let onSaveClick=()=>{
        //dispatch
        dispatch(actions.createTask({
            id: Math.floor(Math.random() * 10000000),     
            taskTitle:taskTitle,
            taskDateTime:taskDateTime
        } 
        ));
        setTaskTitle("");
        setTaskDateTime("");
        setIsNewTaskOpen(!isNewTaskOpen);
    };

    let onCancelClick=()=>{
        setIsNewTaskOpen(!isNewTaskOpen);
    };

    let onDeleteClick=(task)=>{
       if(window.confirm("Are you sure to delete this task"))
       {
        dispatch(actions.deleteTask(task.id));
       }
    }
    let onFetchCancelClick =()=>{
         dispatch(actions.cancelFetchTasks());
    };
  return(
      <div className="outer-container">
          <div className="container">
             <div className="app-title-container">
                <div className="app-title">
                    <h1>Tasks 
                          {tasks.loading ? <span>
                            <i className="fas fa-spinner fa-spin"></i>
                              <button className="button button-red" onClick={onFetchCancelClick}>Cancel</button>
                          </span> :""}
                        </h1>
                        {tasks.error ?   <h2>{tasks.error.message}</h2> : ""}                      
                </div>
               <div className="create-button-container">
                {isNewTaskOpen == false ?   <button className="button create-button" onClick={()=>{
                        setIsNewTaskOpen(!isNewTaskOpen);
                       }}>
                       <i className="fa fa-calendar-plus"></i> &nbsp;&nbsp;Create</button> : null }
                     
               </div>
             </div>   
             <Collapsible isOpen={isNewTaskOpen}>           
                <div className="new-task-container">
                    <h4 className="new-task-title">New Task</h4>
                    <div className="form-group">
                        <label className="form-label" htmlFor="task-title">Task Title</label>
                        <div className="form-input">
                        <input type="text" placeholder="Task Title" className="text-box" id="task-title" value={taskTitle} onChange={(event)=>{
                            setTaskTitle(event.target.value)
                        }}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="task-date-time">Task Date and Time:</label>
                            <div className="form-input">
                                <input type="datetime-local" placeholder="Task Date and Time" className="text-box" id="task-date-time" value={taskDateTime} onChange={(event)=>{
                            setTaskDateTime(event.target.value)
                        }}></input>
                            </div>                     
                    </div>
                    
                    <div className="button-group">
                        <button className="button save-button" onClick={()=>{
                            onSaveClick();
                        }}>
                        <i className="fa fa-save"></i>&nbsp; Save Task</button>
                        <button className="button cancel-button" onClick={()=>{
                            onCancelClick();
                        }}>
                        <i className="fa fa-save"></i>&nbsp; Cancel</button>
                    </div>
                </div>   
             </Collapsible>
             <div className="search-box">
                <input type="search" value={search} onChange={(event)=>{
                    setSearch(event.target.value);
                }} placeholder="Search"/><i className="fa fa-search"></i>
            </div>    
            
            <div className="content-body">
                {filteredTasks.map(task=>
                                    <div className="task" key={task.id}>
                                    <div className="task-body" >
                                       <div className="task-title">
                                             <i className="fa fa-thumbtack"></i>
                                            <span className="task-title-text">{task.taskTitle}</span>
                                       </div>
                                       <div className="task-subtitle">
                                          <i className="far fa-clock"></i>
                                          <span className="task-subtitle-text">{toDisplayableDateFormat(task.taskDateTime)}</span>
                                       </div>
                                    </div>   
                                    <div className="task-options">
                                              <button className="icon-button" title="Delete" onClick={()=>{(onDeleteClick(task))}}>&times;</button>
                                    </div>
                                </div>
                )}                


           {filteredTasks.length == 0 ? <div>No Tasks Loaded</div>:""}

            </div>
          </div>
      </div>
  )
}
export default Tasks;