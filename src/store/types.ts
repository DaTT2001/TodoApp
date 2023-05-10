export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
    isActive: boolean;
}
export const initialTaskState: Task = {
    id: '',
    title: '',
    isCompleted: false,
    isActive: true,
} 
export type State = {
    job: Task,
    jobs: Task[] ,
}
export interface setTodoInterface {
    type: 'SET';
    payload: string;
}

export interface updateTodoInterface {
    type: 'UPDATE';
    payload: Task;
}

export interface deleteTodoInterface {
    type: 'DELETE';
    payload: number;
}
export interface setJobInterface {
    type: 'SET_JOBS';
    payload: Task[];
}
export interface completeJobInterface {
    type: 'COMPLETE_JOB';
    payload: {
        id: string,
        complete: boolean,
    };
}
export interface editJobInterface {
    type: 'EDIT_JOB';
    payload: {
        id: string,
        title: string,
    };
}
export type Action = 
    | {type: 'SET', payload: string}
    | {type: 'UPDATE', payload: Task}
    | {type: 'DELETE', payload: number}
    | {type: 'SET_JOBS', payload: Task[]}
    | {type: 'COMPLETE_JOB', payload: {id: string, complete: boolean}}
    | {type: 'EDIT_JOB', payload: {id: string, title: string}}
    ;
