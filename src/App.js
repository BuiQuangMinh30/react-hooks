import { useState, useEffect } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show && <Content2/>}
     </div>
  );
}

export default App;
