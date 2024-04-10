
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addTask, recComplete, recDel } from './TodoSlice';
const App=()=>{
  const ans=useSelector((state)=>state.todo.task);
  const dispatch=useDispatch("");
  const [input, setInput]=useState("");

  let sn=0;
  const workAdd=()=>{
    dispatch(addTask(input))
  }
  const myDel=(id)=>
  {
    dispatch(recDel(id))
  }
  const taskComplete=(id)=>{
    dispatch(recComplete(id));
  }
  const myans=ans.map((key)=>{
    sn++;
    return(
      <tr>
        <td>[{sn}].</td>
        <td>{key.status? <span> {key.work} </span> : <span style={{color:"red", textDecoration:"line-through"}}></span>}</td>
        <td>
          <button onClick={()=>{myDel(key.id)}}>Delete</button>
        </td>
        <td>
          <button onClick={()=>{taskComplete(key.id)}}>complete</button>
        </td>
        <td> 
          <button>reopen
            
          </button>
        </td>
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
    <table border="1">
      <tr>
        <td>sno</td>
        <td>work additing</td>
        <th></th>
        <th></th>
      </tr>
    </table>

    {myans}
    </>
  );
}
export default App;