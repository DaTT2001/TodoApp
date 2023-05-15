import { setTodoInterface, updateTodoInterface, deleteTodoInterface, setJobInterface, completeJobInterface, editJobInterface, Task } from './types';

export function setTodo (payload: Task): setTodoInterface {
  return {
    type: 'SET',
    payload
  };
}

export function updateTodo (payload: Task): updateTodoInterface {
  return {
    type: 'UPDATE',
    payload
  };
}

export function deleteTodo (payload: number): deleteTodoInterface {
  return {
    type: 'DELETE',
    payload
  };
}
export function setJobs (payload: Task[]): setJobInterface {
  return {
    type: 'SET_JOBS',
    payload
  };
}
export function completeJob (payload: {id: string, complete: boolean}): completeJobInterface {
  return {
    type: 'COMPLETE_JOB',
    payload
  };
}
export function editJob (payload: {id: string, title: string, timestamp: number}): editJobInterface {
  return {
    type: 'EDIT_JOB',
    payload
  };
}
