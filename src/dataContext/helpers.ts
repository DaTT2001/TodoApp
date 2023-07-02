import { Action } from './TodoContext';
import { ActionType } from '../shared/constants';
import { Task } from '../shared/interfaces';

export const setTodo = (payload: Task): Action => {
  return {
    type: ActionType.SET,
    payload
  };
};

export const updateTodo = (payload: Task): Action => {
  return {
    type: ActionType.UPDATE,
    payload
  };
};

export const deleteTodo = (payload: string): Action => {
  return {
    type: ActionType.DELETE,
    payload
  };
};

export const setJobs = (payload: Task[]): Action => {
  return {
    type: ActionType.SETJOBS,
    payload
  };
};

export const completeJob = (payload: { id: string, complete: boolean }): Action => {
  return {
    type: ActionType.COMPLETE,
    payload
  };
};

export const editJob = (payload: { id: string, title: string, timestamp: number }): Action => {
  return {
    type: ActionType.EDIT,
    payload
  };
};

export const changeFilter = (payload: string): Action => {
  return {
    type: ActionType.FILTER,
    payload
  };
};

export const setLoading = (payload: boolean): Action => {
  return {
    type: ActionType.LOADING,
    payload
  };
};
