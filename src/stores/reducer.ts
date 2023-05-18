import { State, Action, defaultTask, Task, ActionType } from './types';

export const initalState: State = {
  job: defaultTask,
  jobs: [],
  filter: 'all',
  isLoading: false
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
const removeObjectByKeyId = (jobs: Task[], id: string): void => {
  const index = jobs.findIndex(obj => obj.id === id);
  console.log(index);
  if (index !== -1) {
    jobs.splice(index, 1);
  }
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
  console.log(action);
  switch (action.type) {
  case ActionType.set:
    return {
      ...state,
      job: {
        ...state.job,
        title: action.payload.title,
        timestamp: action.payload.timestamp
      }
    };
  case ActionType.update:
    return {
      ...state,
      jobs: [...state.jobs, action.payload]
    };
  case ActionType.delete:
    newJobs = [...state.jobs];
    removeObjectByKeyId(newJobs, action.payload);
    return {
      ...state,
      jobs: newJobs
    };
  case ActionType.setJobs:
    return {
      ...state,
      jobs: action.payload
    };
  case ActionType.complete:
    return {
      ...state,
      jobs: updateListJobComplete(state.jobs, action.payload.id, action.payload.complete)
    };
  case ActionType.edit:
    return {
      ...state,
      jobs: updateListJobTitle(state.jobs, action.payload.id, action.payload.title, action.payload.timestamp)
    };
  case ActionType.filter:
    return {
      ...state,
      filter: action.payload
    };
  case ActionType.loading:
    return {
      ...state,
      isLoading: action.payload
    };
  default:
    throw new Error('invalid action');
  }
}
