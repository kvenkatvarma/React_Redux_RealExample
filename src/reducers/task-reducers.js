import * as actionTypes from "../constants/action-types";

let initialState ={data:[],loading:false,error:""};

export const tasksReducer=(state=initialState,action)=>{
switch(action.type){
    case actionTypes.FETCH_TASKS_PENDING:
        return {data:[],loading:true,error:""};

    case actionTypes.FETCH_TASKS_FULFILLED:
            return {data:action.payload.data,loading:false,error:""};  

    case actionTypes.FETCH_TASKS_REJECTED:
                return {data:state,loading:false,error:action.payload};   

    case actionTypes.CREATE_TASK_PENDING:
        return {data:state.data,loading:true,error:""};

    case actionTypes.CREATE_TASK_REJECTED:
            return {data:state.data,loading:false,error:action.payload};

    case actionTypes.CREATE_TASK_FULFILLED:
                return {data:[...state.data,action.payload.data],loading:false,error:""}   
    
    case actionTypes.DELETE_TASK_PENDING:
        return {data:state.data,loading:true,error:""};

    case actionTypes.DELETE_TASK_REJECTED:
            return {data:state.data,loading:false,error:action.payload};

    case actionTypes.DELETE_TASK_FULFILLED:      
                return {data:state.data.filter(task=>task.id != action.payload),loading:false,error:""}     
     default:
        return state;
}
};