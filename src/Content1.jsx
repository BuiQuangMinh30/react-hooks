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
//3. Cleanup function luôn được gọi trước khi callback được gọi lại ( trừ lần mounted)
function Content1() {
    const [avatar, setAvatar] = useState();
    useEffect(()=>{
        //Cleanup
        return ()=> {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
  const handlePreviewAvatar = (event) => {
      const file = event.target.files[0]
      
      file.preview = URL.createObjectURL(file);
      
      setAvatar(file)
  }
   return (
       <div>
           <input 
           type="file"
            onChange={handlePreviewAvatar}
            />
            {avatar && 
                (<img src={avatar.preview} alt="" width="80%"/>)
            }
       </div>
    )
}

export default Content1;