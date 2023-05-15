import { State, Action, initialTaskState, Task } from './types';

export const initalState: State = {
  job: initialTaskState,
  jobs: []
};

let newJobs: Task[] = [];

const updateListJobComplete = (jobs: Task[], jobId: string, isCompleted: boolean): Task[] => {
  return jobs.map(job => {
    if (job.id === jobId) {
      return { ...job, isCompleted, isActive: !isCompleted };
    }
    return job;
  });
};

const updateListJobTitle = (jobs: Task[], jobId: string, title: string, timestamp: number): Task[] => {
  return jobs.map(job => {
    if (job.id === jobId) {
      return { ...job, title, timestamp };
    }
    return job;
  });
};

export function reducer (state: State, action: Action): State {
  console.log(action, 'action');
  console.log(state, 'state');
  switch (action.type) {
  case 'SET':
    return {
      ...state,
      job: {
        ...state.job,
        title: action.payload.title,
        timestamp: action.payload.timestamp
      }
    };
  case 'UPDATE':
    return {
      ...state,
      jobs: [...state.jobs, action.payload]
    };
  case 'DELETE':
    newJobs = [...state.jobs];
    newJobs.splice(action.payload, 1);
    return {
      ...state,
      jobs: newJobs
    };
  case 'SET_JOBS':
    return {
      ...state,
      jobs: action.payload
    };
  case 'COMPLETE_JOB':
    return {
      ...state,
      jobs: updateListJobComplete(state.jobs, action.payload.id, action.payload.complete)
    };
  case 'EDIT_JOB':
    return {
      ...state,
      jobs: updateListJobTitle(state.jobs, action.payload.id, action.payload.title, action.payload.timestamp)
    };
  default:
    throw new Error('invalid action');
  }
}
