import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
//1. useEffect(callback)
//-Còn gọi callback mỗi khi components re-render (it dùng)
//- GỌi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//-Chỉ gọi callback 1 lần mỗi khi component mounted
//3. useEffect(callback, [deps])
//-callback sẽ được gọi lại mỗi khi deps thay đổi
//-sưer dụng toán tử so sánh để khi giốg nahu thì k callback lại

//1. Callback luôn được gọi sau khi components mount
//2. Cleanup function luôn được gọi trước khi components unmounted
//2. Cleanup function luôn được gọi trước khi callback được gọi lại ( trừ lần mounted)
function Content() {
   const [countdown, setCountdown] = useState(180)
   
   useEffect(()=> {
       const timerId = setInterval(()=> {
           setCountdown(prev => prev - 0.5)
           console.log('countdown')
       },1000)
       return () => {
           clearInterval(timerId)
       }
   },[])

   

//    useEffect(()=> {
//     setTimeout(()=> {
//         setCountdown(countdown -1)
//     },1000)
// },[countdown])

   return (
       <div>
           <h1>{countdown}</h1>
       </div>
    )
}

export default Content;