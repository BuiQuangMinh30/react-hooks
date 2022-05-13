import { useState } from "react";

function App() {
  
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(()=>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  })
   const hanldeSubmit = () => {
     setJobs(prev => {
       const newJobs = [...prev, job]

       //Save to local storage
       const jsonJobs = JSON.stringify(newJobs)
       localStorage.setItem('jobs',jsonJobs)
       return newJobs
     })
     setJob('')

   }
  return (
    <div>
      <input 
      value={job}
       onChange={e => setJob(e.target.value)}/>
      <button onClick={hanldeSubmit}>ADD</button>

      <ul>
        {jobs.map((job,index) =>(
          <li key={index}>{job}</li>
        ))}
       
      </ul>
     </div>
  );
}

export default App;
