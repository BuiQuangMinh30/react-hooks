import { useState } from "react";
const gifts= [
  '123',
  'mot hai ba',
  'mot 2 ba'
]
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  }, 
  {
    id: 2,
    name: 'HTML, CSS, JS'
  }
]
function App() {
 //const [gift, setGift] = useState();
//  const [name, setName] = useState();
//  const [emai, setEmail] = useState();
// const [checked, setChecked] = useState();
const [checked, setChecked] = useState([

]);

  // const randomGift = () =>{
  //   const index = Math.floor(Math.random() *gifts.length)

  //   setGift(gifts[index])
  // }
  //console.log(checked)
  const handleSubmit = () => {
    //Call API 
    console.log({id: checked})
  }
  const handldeCheck = (id) =>{
    setChecked(prev =>  {
      const isChecked = checked.includes(id)
      if(isChecked){
        //Uncheck
        return checked.filter(item => item !== id)//lọc lấy ra cái th khác id check
      }
      else{
        return [...prev,id]
      }
    })
  }
  return (
    <div>
      {/* <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}> Lấy thưởng</button> */}
      {/* // <input onChange={e => setName(e.target.value)} value={name}/>
      // <input onChange={e => setEmail(e.target.value)} value={emai}/> */}
      {courses.map(course => (
        <>
        {/* radio */}
          {/* <div key={course.id}>
            <input type="radio"
            onChange={()=> setChecked(course.id)}
            checked={checked === course.id}/>
            {course.name}
          </div> */}

          <div key={course.id}>
            <input type="checkbox"
            onChange={() => handldeCheck(course.id)}
            checked={checked.includes(course.id)}/>
            {course.name}
            
          </div>
        </>
      ))}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default App;
