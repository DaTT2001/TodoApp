import React, { useState } from 'react';
import edit from './EditJobItem.module.css';
import { Task } from '../../stores/types';
import { useTodo } from '../../context/Provider';
import { editJob } from '../../stores/actions';
import { editTask } from '../../services/api';

interface Props {
  job: Task
}

const EditJobItem = ({ job }: Props): JSX.Element => {
  const { dispatch } = useTodo();
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setJobTitle] = useState<string>(job.title);
  const [time, setTime] = useState<number>(job.timestamp);

  function handleClick (): void {
    setShowModal(!showModal);
  }
  function handleChangeInput (event: React.ChangeEvent<HTMLInputElement>): void {
    setJobTitle(event.target.value);
  }
  function handleChangeTime (event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);
    const date = new Date(event.target.value);
    setTime(date.getTime());
  }
  function handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(editJob({ id: job.id, title: jobTitle, timestamp: time }));
    void editTask(job.id, jobTitle, time);
    setShowModal(false);
  }
  return (
    <>
      <span onClick={handleClick}>Edit</span>
      {showModal && <div className={edit.modal}>
        <div className={edit.modalContent}>
          <div className={edit.modalHeader}>
            <h2>Edit Task</h2>
            <span className={edit.modalClose} onClick={handleClick}>Close</span>
          </div>
          <form onSubmit={handleSubmit} className={edit.form}>
            <input value={jobTitle} type="text" onChange={handleChangeInput}/>
            <input className={edit.inputTime} type="datetime-local" onChange={handleChangeTime}/>
            <button>Submit</button>
          </form>
        </div>
      </div>}
    </>
  );
};

export default EditJobItem;
