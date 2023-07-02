import jobItem from './JobItem.module.css';
import { JobItemProps, Task } from '../../../shared/interfaces';
import React, { useState } from 'react';
import { deleteTask, completeTask } from '../../../shared/api/api';
import EditJobItem from './EditJobItem/EditJobItem';
import Countdown from './Countdown/Countdown';
import { useTodo } from '../../../dataContext/TodoProvider';
import { completeJob, deleteTodo } from '../../../dataContext/helpers';
import Notification from '../../../shared/components/notification/Notification';
import { toast } from 'react-toastify';
import JobTitle from './JobTitle/JobTitle';
import { checkAndTrimString } from '../../../shared/util';

const JobItem = ({ job, index }: JobItemProps): JSX.Element => {
  const { dispatch } = useTodo();
  const [modalVisible, setModalVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(job.isCompleted);

  const handleClickTask = (): void => {
    setIsCompleted(!isCompleted);
    dispatch(completeJob({ id: job.id, complete: !isCompleted }));
    void completeTask(job.id, !isCompleted, isCompleted);
    if (!isCompleted) {
      toast.success(`Task ${checkAndTrimString(job.title, 30)} is completed!`);
    } else {
      toast.warning(`Task ${checkAndTrimString(job.title, 30)} is active!`);
    }
  };

  const handleDelete = (job: Task): void => {
    dispatch(deleteTodo(job.id));
    void deleteTask(job.id);
    setModalVisible(false);
  };
  const modalDelete =
      <div className={jobItem.modalContent}>
        <div className={jobItem.modalHeader}>
          <h2>Delete Task &quot;{checkAndTrimString(job.title, 18)}&quot; ?</h2>
          <span className={jobItem.modalClose} onClick={() => setModalVisible(false)}><i className="bi bi-x-circle-fill"></i></span>
        </div>
        <div className={jobItem.modalActions}>
          <button onClick={() => setModalVisible(false)}>Cancel</button>
          <button onClick={() => { handleDelete(job); toast.success(`Task "${checkAndTrimString(job.title, 30)}" delete  completed!`); }}>Delete</button>
        </div>
      </div>;
  return (
    <div className={jobItem.taskItem} key={job.id}>
      <div className={jobItem.taskTitle}>
        <div className={isCompleted ? jobItem.taskComplete : '' }>
          <input onChange={handleClickTask} checked={isCompleted} type="checkbox"/>
          {<JobTitle title = {job.title}/>}
        </div>
        <div className={isCompleted ? jobItem.taskComplete : '' }>
          <Countdown timestamp = {job.timestamp} title = {job.title} isCompleted= {job.isCompleted}/>
        </div>
      </div>
      <span className={jobItem.itemFunction}>
        <div className={jobItem.edit}><EditJobItem job ={job}/>
        </div>
        <p
          className={jobItem.delete}
          onClick={() => setModalVisible(true)}
        >
          <i className="bi bi-trash-fill"></i>
        </p>
      </span>
      {modalVisible && (
        <Notification isOpen={modalVisible} onRequestClose={() => { setModalVisible(false); }} contentLabel='asdadas' messege={modalDelete} />
      )}
    </div>
  );
};

export default JobItem;
