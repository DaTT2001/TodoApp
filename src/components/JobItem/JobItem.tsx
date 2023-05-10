import jobItem from './JobItem.module.css'
import { Task } from '../../store/types';
import { useTodo } from '../../context/Provider';
import {useState} from 'react'
import { completeJob, deleteTodo } from '../../store/actions';
import { deleteTask, completeTask } from '../../services/api';

interface Props {
  job: Task;
  index: number;
}

const JobItem = ({ job, index }: Props) => {
  const { state, dispatch } = useTodo();
  const [isCompleted, setIsCompleted] = useState<boolean>(job.isCompleted);
  function handleClickTask() {
    setIsCompleted(!isCompleted);
    dispatch(completeJob({id: job.id, complete: !isCompleted}));
    completeTask(job.id, !isCompleted, isCompleted);
  }

  return (
    <li className={jobItem.taskItem} key={job.id}>
      <div>
        <input onChange={handleClickTask} checked={isCompleted} type="checkbox"/>
        <p className={`${jobItem.taskTitle} ${isCompleted ? jobItem['taskComplete'] : '' }`}>{job.title}</p>
      </div>
      <span className={jobItem.itemFunction}>
        <p className={jobItem.edit}>Edit</p>
        <p
          className={jobItem.delete}
          onClick={() => {
            dispatch(deleteTodo(index));
            deleteTask(job.id);
          }}
        >
          Delete
        </p>
      </span>
    </li>
  );
};

export default JobItem;
