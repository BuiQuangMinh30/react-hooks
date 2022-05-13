import { useState, useEffect } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show && <Content/>}
     </div>
  );
}

export default App;
