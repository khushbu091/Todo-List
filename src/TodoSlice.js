import { createSlice } from "@reduxjs/toolkit";
const initialState={
    task:[]

}
const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            state.task.push({id:Date.now(), work:action.payload});
        }
    }
});
export const {addTask}=todoSlice.actions;
export default todoSlice.reducer;