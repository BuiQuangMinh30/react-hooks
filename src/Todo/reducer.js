import {SET_JOB,ADD_JOB, DEL_JOB} from './constant';

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) =>{
   
    switch(action.type){
        case SET_JOB:
            return  {
                ...state, job: action.payload
            }
           
        case ADD_JOB: 
            return {
                ...state,
                // job: '', tránh làm ntn
                jobs:[...state.jobs,action.payload]
            }
           
        case DEL_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload)
            return  {
                ...state,
                jobs: newJobs
            }
          
        default:
            throw new Error(`Invalid action ${action.type}`)
        
    }
   
}

export default reducer;