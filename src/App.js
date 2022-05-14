import { useState,useRef, useEffect } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
function App() {
  // const [show, setShow] = useState(false)
  // return (
  //   <div>
  //     <button onClick={()=>setShow(!show)}>Toggle</button>
  //     {show && <Content2/>}
  //    </div>
  // );
  const [count, setCount] = useState(60);
  
  let timerId = useRef(); 
  const handleStart = () =>{
    timerId.current =  setInterval(()=>{
      setCount(prev=>prev-1)
    },1000)
  }
  const handlePause = () =>{
    clearInterval(timerId.current)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default App;
