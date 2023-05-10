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
export interface setTodo1 {
    type: 'SET';
    payload: string;
}

export interface updateTodo1 {
    type: 'UPDATE';
    payload: Task;
}

export interface deleteTodo1 {
    type: 'DELETE';
    payload: number;
}
export interface setJob1 {
    type: 'SET_JOBS';
    payload: Task[];
}
export interface completeJob1 {
    type: 'COMPLETE_JOB';
    payload: {
        id: string,
        complete: boolean,
    };
}
export type Action = 
    | {type: 'SET', payload: string}
    | {type: 'UPDATE', payload: Task}
    | {type: 'DELETE', payload: number}
    | {type: 'SET_JOBS', payload: Task[]}
    | {type: 'COMPLETE_JOB', payload: {id: string, complete: boolean}}
    ;
