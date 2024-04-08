import { createSlice } from "@reduxjs/toolkit";
const initialState={
    bgclr:"orange",
}
const changeColorSlice= createSlice({
    name:"mycolor",
    initialState:initialState,
    reducers:{
        colorChange:(state, action)=>{
            state.bgclr=action.payload;
        }
    }
})
export const {colorChange}= changeColorSlice.actions;
export default changeColorSlice.reducer;

