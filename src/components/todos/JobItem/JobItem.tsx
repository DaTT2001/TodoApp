import jobItem from './JobItem.module.css';
import { Task } from '../../../stores/types';
import { useTodo } from '../../../context/Provider';
import React, { useState } from 'react';
import { completeJob, deleteTodo } from '../../../stores/actions';
import { deleteTask, completeTask } from '../../../services/api';
import EditJobItem from './EditJobItem/EditJobItem';
import Countdown from './Countdown/Countdown';
interface Props {
  job: Task
  index: number
}

const JobItem = ({ job, index }: Props): JSX.Element => {
  const { dispatch } = useTodo();
  const [isCompleted, setIsCompleted] = useState<boolean>(job.isCompleted);
  function handleClickTask (): void {
    setIsCompleted(!isCompleted);
    dispatch(completeJob({ id: job.id, complete: !isCompleted }));
    void completeTask(job.id, !isCompleted, isCompleted);
  }

  return (
    <div className={jobItem.taskItem} key={job.id}>
      <div className={jobItem.taskTitle}>
        <div className={isCompleted ? jobItem.taskComplete : '' }>
          <input onChange={handleClickTask} checked={isCompleted} type="checkbox"/>
          <p>{job.title}</p>
        </div>
        <div className={isCompleted ? jobItem.taskComplete : '' }>
          <Countdown timestamp = {job.timestamp} title = {job.title}/>
        </div>
      </div>
      <span className={jobItem.itemFunction}>
        <div className={jobItem.edit}><EditJobItem job ={job}/>
        </div>
        <p
          className={jobItem.delete}
          onClick={() => {
            const confirmMessage = `Are you sure you want to delete the job ${job.title}?`;
            if (window.confirm(confirmMessage)) {
              dispatch(deleteTodo(job.id));
              void deleteTask(job.id);
            }
          }}
        >
          <i className="bi bi-trash-fill"></i>
        </p>
      </span>
    </div>
  );
};

export default JobItem;
