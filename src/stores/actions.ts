import { filterInterface, ActionType, setTodoInterface, updateTodoInterface, deleteTodoInterface, setJobsInterface, completeJobInterface, editJobInterface, Task, loadingInterface } from './types';

export function setTodo (payload: Task): setTodoInterface {
  return {
    type: ActionType.set,
    payload
  };
}

export function updateTodo (payload: Task): updateTodoInterface {
  return {
    type: ActionType.update,
    payload
  };
}

export function deleteTodo (payload: string): deleteTodoInterface {
  return {
    type: ActionType.delete,
    payload
  };
}
export function setJobs (payload: Task[]): setJobsInterface {
  return {
    type: ActionType.setJobs,
    payload
  };
}
export function completeJob (payload: {id: string, complete: boolean}): completeJobInterface {
  return {
    type: ActionType.complete,
    payload
  };
}
export function editJob (payload: {id: string, title: string, timestamp: number}): editJobInterface {
  return {
    type: ActionType.edit,
    payload
  };
}
export function changeFilter (payload: string): filterInterface {
  return {
    type: ActionType.filter,
    payload
  };
}
export function setLoading (payload: boolean): loadingInterface {
  return {
    type: ActionType.loading,
    payload
  };
}
