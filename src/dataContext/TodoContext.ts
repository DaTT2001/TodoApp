import { createContext } from 'react';
import { ActionType, INITIAL_STATE } from '../shared/constants';
import { Task, State } from '../shared/interfaces';

export type Action =
  | { type: ActionType.SET, payload: Task }
  | { type: ActionType.UPDATE, payload: Task }
  | { type: ActionType.DELETE, payload: string }
  | { type: ActionType.SETJOBS, payload: Task[] }
  | { type: ActionType.COMPLETE, payload: { id: string, complete: boolean } }
  | { type: ActionType.EDIT, payload: { id: string, title: string, timestamp: number } }
  | { type: ActionType.FILTER, payload: string }
  | { type: ActionType.LOADING, payload: boolean };

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
  case ActionType.SET:
    return {
      ...state,
      job: {
        ...state.job,
        title: action.payload.title,
        timestamp: action.payload.timestamp
      }
    };
  case ActionType.UPDATE:
    return {
      ...state,
      jobs: [...state.jobs, action.payload]
    };
  case ActionType.DELETE:
    return {
      ...state,
      jobs: state.jobs.filter(job => job.id !== action.payload)
    };
  case ActionType.SETJOBS:
    return {
      ...state,
      jobs: action.payload
    };
  case ActionType.COMPLETE:
    return {
      ...state,
      jobs: state.jobs.map(job => {
        if (job.id === action.payload.id) {
          return {
            ...job,
            isCompleted: action.payload.complete,
            isActive: !action.payload.complete
          };
        }
        return job;
      })
    };
  case ActionType.EDIT:
    return {
      ...state,
      jobs: state.jobs.map(job => {
        if (job.id === action.payload.id) {
          return {
            ...job,
            title: action.payload.title,
            timestamp: action.payload.timestamp
          };
        }
        return job;
      })
    };
  case ActionType.FILTER:
    return {
      ...state,
      filter: action.payload
    };
  case ActionType.LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  default:
    throw new Error('Invalid action');
  }
};

export const Context = createContext<{state: State, dispatch: React.Dispatch<Action>}>({
  state: INITIAL_STATE,
  dispatch: () => {}
});
