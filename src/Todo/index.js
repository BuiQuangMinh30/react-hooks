import { useState,useRef, useEffect, useCallback, useReducer } from "react";
import reducer, {initState} from "./reducer";
import {setJob,addJob,delJob} from "./actions"
import logger from "./logger"
//useReducer
//1 Init state

//2. Actions 

//3. Reducer

function App1() {
 const [state,dispatch] = useReducer(logger(reducer), initState) //middleware

 const inputRef = useRef();
 const hanldeSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob('')) // làm ntn
    inputRef.current.focus();
 }
 const {job, jobs} = state;
  return (
    <>
     <div>
         <h3>Todo</h3>
         <input
         ref={inputRef}
         value={job}
         onChange={e=> {
             dispatch(setJob(e.target.value));
         }}
         placeholder="nhap vao day"/>

         <button onClick={hanldeSubmit}>Add</button>
         <ul>
             {jobs.map((job,index)=>{
                 return (
                    <li key={index}>{job} <span onClick={()=>dispatch(delJob(index))}>&times;</span></li>
                 )
             })}
            
         </ul>
     </div>
    </>
  )
}

export default App1;
