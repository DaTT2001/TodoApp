import {State, Action, initialTaskState, Task} from './types';


export const initalState:State = {
    job: initialTaskState,
    jobs: [],  
} 

function generateId(): string {
    const timestamp = Date.now().toString(36); 
    const randomChars = Math.random().toString(36).substring(2, 8); 
    const id = timestamp + randomChars;
    return id;
}

export function reducer(state: State, action: Action): State {
    console.log(action)
    console.log(state.jobs);
    
    switch (action.type) {
        case 'SET': 
            return {
                ...state,
                job: {
                    ...state.job,
                    title: action.payload,
                    id: generateId()
                }
            }
        case 'UPDATE': 
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case  'DELETE': 
            const newJobs: Task[]= [...state.jobs]
            // xoa theo index
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }
        case 'COMPLETE_JOB':
            const jobId = action.payload.id;
            const isCompleted = action.payload.complete;
            const updateJobs = state.jobs.map(job => {
                if(job.id === jobId) {
                    return {...job, isCompleted: isCompleted, isActive: !isCompleted}
                }
                return job;
            })
            return {
                ...state,
                jobs: updateJobs
            }

        default: 
            throw new Error("invalid action")
    }
}
