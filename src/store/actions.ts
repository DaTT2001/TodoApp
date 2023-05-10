import { Task } from './types';
import { setTodo1, updateTodo1, deleteTodo1, setJob1, completeJob1 } from './types';

export function setTodo(payload: string): setTodo1 {
    return {
      type: 'SET',
      payload
    };
}

export function updateTodo(payload: Task): updateTodo1 {
    return {
        type: 'UPDATE',
        payload
    }
}

export function deleteTodo(payload: number): deleteTodo1 {
    return {
        type: 'DELETE',
        payload
    }
}
export function setJobs(payload: Task[]): setJob1 {
    return {
        type: 'SET_JOBS',
        payload
    }        
}
export function completeJob(payload: {id: string, complete: boolean} ): completeJob1 {
    return {
        type: 'COMPLETE_JOB',
        payload
    }        
}