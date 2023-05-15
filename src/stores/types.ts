export interface Task {
  id: string
  title: string
  isCompleted: boolean
  isActive: boolean
  timestamp: number
}
export const initialTaskState: Task = {
  id: '',
  title: '',
  isCompleted: false,
  isActive: true,
  timestamp: 0
};
export interface State {
  job: Task
  jobs: Task[]
}
export interface setTodoInterface {
  type: 'SET'
  payload: Task
}
export interface updateTodoInterface {
  type: 'UPDATE'
  payload: Task
}
export interface deleteTodoInterface {
  type: 'DELETE'
  payload: number
}
export interface setJobInterface {
  type: 'SET_JOBS'
  payload: Task[]
}
export interface completeJobInterface {
  type: 'COMPLETE_JOB'
  payload: {
    id: string
    complete: boolean
  }
}
export interface editJobInterface {
  type: 'EDIT_JOB'
  payload: {
    id: string
    title: string
    timestamp: number
  }
}
export type Action =
    | {type: 'SET', payload: Task}
    | {type: 'UPDATE', payload: Task}
    | {type: 'DELETE', payload: number}
    | {type: 'SET_JOBS', payload: Task[]}
    | {type: 'COMPLETE_JOB', payload: {id: string, complete: boolean}}
    | {type: 'EDIT_JOB', payload: {id: string, title: string, timestamp: number}}
    ;
