import { createSlice } from "@reduxjs/toolkit";
const initialState={
    task:[]

}
const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            state.task.push({id:Date.now(), work:action.payload, status:true});
        },
        recDel:(state, action)=>{
            state.task=state.task.filter(function(key){
                if(key.id!=action.payload){
                    return true
                }
                
            })
        // recDel:(state, action)=>{
        //     state.task= state.task.filter(key=>key.id!=action.payload);
        // }
        reComplete:(state, action)=>{
            for (var i=0; i<state.task.lenght; ++)
            {
                if(state.task[i].id==action.payload)
            }
        }
        }
    }
});
export const {addTask, recDel,reComplete}=todoSlice.actions;
export default todoSlice.reducer;