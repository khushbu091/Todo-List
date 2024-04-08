import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./changeColorSlice";
const store=configureStore({
    reducer:{
    mycolor:colorReducer,        
    }
});
export default store;
