import { useSelector } from "react-redux";
import{useDispatch} from "react-redux";
import { useState } from "react";
import { colorChange } from "./changeColorSlice";
const App=()=>
{ 
  const mybg= useSelector((state)=>state.mycolor.bgclr);
  const dispatch = useDispatch();
  const [color, setColor]= useState("");
  return(
    <>
     <h1> App component welcome to cybrom bhopal</h1>
     Enter color:<input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
     <br/>
     <button onClick={()=>{dispatch(colorChange(color))}}>Change color</button>
     <div style={{width:"300px", height:"100px", backgroundColor:mybg}}></div>
     <hr/>
    </>
  );
}
export default App;
