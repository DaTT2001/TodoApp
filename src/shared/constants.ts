import { State, Task } from './interfaces';
export const SECOND_MS = 1000;
export const MINUTES_MS = 1000 * 60;
export const HOUR_MS = 60 * 1000 * 60;
export const DAY_MS = 24 * 60 * 1000 * 60;
export const TITLE_LENGTH = 80;
export const SECOND_IN_MINUTE = 60;
export enum ActionType {
    SET = 'SET',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    SETJOBS = 'SET_JOBS',
    COMPLETE = 'COMPLETE_JOB',
    EDIT = 'EDIT_JOB',
    FILTER = 'CHANGE_FILTER',
    LOADING = 'LOADING'
}
export enum FilterType {
    ALL = 'all',
    ACTIVE = 'active',
    COMPLETE = 'complete'
}
export const DEFAULT_TASK: Task = {
  id: '',
  title: '',
  isCompleted: false,
  isActive: true,
  timestamp: 0
};
export const INITIAL_STATE: State = {
  job: DEFAULT_TASK,
  jobs: [],
  filter: 'all',
  isLoading: false
};
export const NOTIFICATION_CONTENT: React.CSSProperties = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '0px',
  borderRadius: '20px',
  border: 'none',
  background: 'none'
};
export const NOTIFICATION_OVERLAY: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)'
};
export const LOGO_LINK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Microsoft_To-Do_icon.svg/2515px-Microsoft_To-Do_icon.svg.png';
