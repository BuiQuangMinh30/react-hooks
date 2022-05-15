import { useState,useRef, useEffect, useCallback } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2.jsx";
import Content3 from "./Content3";
function App() {
  const [count, setCount] = useState(0);
  const [todos,setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c +1);
  }
  const addTodos = useCallback(()=>{
    setTodos((t)=> [...t,"hello"])
  },[todos])
  return (
    <>
      <Content3 addTodos={addTodos} todos={todos}/>
      <hr/>
      <div>
        Count: {count}
        <button onClick={increment}>Add</button>
        </div> 
    </>
  )
}

export default App;
