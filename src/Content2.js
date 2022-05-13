import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useLayoutEffect } from "react";

//khác nhau thứ tự cập nhật công việc

//useEffect (mặc định dùng useEffect, nếu k dc mới dùng uselayoutEffect)
//1. Cập nhập lại state
//1. Cập nhập DOM (mutated) đột biến
//3. Render lại UI
//3. Gọi cleanup nếu deps thay đổi
//3. Gọi useEffect callback

//useLayoutEffect
//1. Cập nhật lại state
//1. Cập nhập DOM (mutated)
//3. Gọi cleanup nếu deps thay đổi (sync: đồng bộ)
//3. Gọi useLayoutEffect callback (sync)
//3. Render lại UI
function Content2() {
   const [count, setCount] = useState(0);

   useLayoutEffect(()=>{
       if(count>3){
           setCount(0)
       }
   }, [count])
   const hanldeCount = () =>{
       setCount(count+1)
   }
   return (
       <div>
           <h1>{count}</h1>
           <button onClick={hanldeCount}>Click</button>
       </div>
    )
}

export default Content2;