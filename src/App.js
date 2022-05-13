import { useState } from "react";
const orders = [100,200,300,500,600,700]
function App() {
  // const [counter, setCounter] = useState(1);//giá trị khởi tạo là 1
  const [counter, setCounter] = useState(()=>{
    const total = orders.reduce((total,cur)=> total+cur)
    return total
  });//giá trị khởi tạo là 1
  const handleIncrease = () => {
    //setCounter(counter + 1);
    //setCounter(counter + 1);
    
    //khi truyền prevState thì có thể callbacks. GỘp 3 lại thực thi 1 lần
    // setCounter(prevState => prevState +1)
    setCounter(prevState => prevState +1)
   
    // sau khi gọi setCounter thì react sẽ gọi hàm App. Lại đọc code từ
    //trên xuống. 
  };
  console.log('re-render')
  return (
    <div>
      <h1>{counter}</h1>
      
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
