
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addTask } from './TodoSlice';
const App=()=>{
  const ans=useSelector((state)=>state.todo.task);
  const dispatch=useDispatch("");
  const [input, setInput]=useState("");
  let sn=0;
  const workAdd=()=>{
    dispatch(addTask(input))
  }
  const myans=ans.map((key)=>{
    sn++;
    return(
      <tr>
        <td>[{sn}].</td>
        <td>{key.work}</td>
      </tr>
    )
  });
  console.log(ans);
  return(
    <>
    <h1> To Do list</h1>
    Enter your task: <input type="taxt" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <button onClick={workAdd}> Add Task </button>
    <hr/>
    {myans}
    </>
  );
}
export default App;