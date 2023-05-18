export interface Task {
  id: string
  title: string
  isCompleted: boolean
  isActive: boolean
  timestamp: number
}
export enum ActionType {
  set = 'SET',
  update = 'UPDATE',
  delete = 'DELETE',
  setJobs = 'SET_JOBS',
  complete = 'COMPLETE_JOB',
  edit = 'EDIT_JOB',
  filter = 'CHANGE_FILTER',
  loading = 'LOADING'
}
export const defaultTask: Task = {
  id: '',
  title: '',
  isCompleted: false,
  isActive: true,
  timestamp: 0
};
export interface State {
  job: Task
  jobs: Task[]
  filter: string
  isLoading: boolean
}
export interface loadingInterface {
  type: ActionType.loading
  payload: boolean
}
export interface filterInterface {
  type: ActionType.filter
  payload: string
}
export interface setTodoInterface {
  type: ActionType.set
  payload: Task
}
export interface updateTodoInterface {
  type: ActionType.update
  payload: Task
}
export interface deleteTodoInterface {
  type: ActionType.delete
  payload: number
}
export interface setJobsInterface {
  type: ActionType.setJobs
  payload: Task[]
}
export interface completeJobInterface {
  type: ActionType.complete
  payload: {
    id: string
    complete: boolean
  }
}
export interface editJobInterface {
  type: ActionType.edit
  payload: {
    id: string
    title: string
    timestamp: number
  }
}
export type Action =
    | setTodoInterface
    | updateTodoInterface
    | deleteTodoInterface
    | setJobsInterface
    | completeJobInterface
    | editJobInterface
    | filterInterface
    | loadingInterface
    ;
