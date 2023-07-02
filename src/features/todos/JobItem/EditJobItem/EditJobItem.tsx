import React, { useState } from 'react';
import edit from './EditJobItem.module.css';
import { EditJobProps, FormValues } from '../../../../shared/interfaces';
import { editTask } from '../../../../shared/api/api';
import Notification from '../../../../shared/components/notification/Notification';
import { useTodo } from '../../../../dataContext/TodoProvider';
import { editJob } from '../../../../dataContext/helpers';
import { toast } from 'react-toastify';
import { formatTimestamp, getTimeStamp } from '../../../../shared/util';

const EditJobItem = ({ job }: EditJobProps): JSX.Element => {
  const { dispatch } = useTodo();
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    title: job.title,
    datetime: formatTimestamp(job.timestamp)
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  const handleForm = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLSpanElement>): void => {
    event.preventDefault();
    if (event.type === 'submit') {
      dispatch(editJob({ id: job.id, title: formValues.title, timestamp: getTimeStamp(formValues.datetime) }));
      void editTask(job.id, formValues.title, getTimeStamp(formValues.datetime));
      if (formValues.title.trim() !== job.title || job.timestamp !== getTimeStamp(formValues.datetime)) {
        toast.success('Task Edited');
      }
    }
    setShowModal(!showModal);
  };
  const editModal =
  <div className={edit.modalContent}>
    <div className={edit.modalHeader}>
      <h2>Edit Task</h2>
      <span className={edit.modalClose} onClick={handleForm}><i className="bi bi-x-circle-fill"></i></span>
    </div>
    <form onSubmit={handleForm} className={edit.form}>
      <div className={edit.formContent}>
        <p>Task Name: </p>
        <input value={formValues.title} type="text" name='title' onChange={handleChange}/>
        <p>Deadline: </p>
        <input className={edit.inputTime} type="datetime-local" name='datetime' onChange={handleChange}/>
        <div className={edit.button}>
          <button onClick={handleForm} className={edit.btnCancel}>Cancel</button><button className={edit.btnSubmit}>Save</button>
        </div>
      </div>
    </form>
  </div>;
  return (
    <>
      <span onClick={handleForm}>
        <i className="bi bi-pencil-square"></i>
      </span>
      {showModal && <Notification
        isOpen = {showModal} onRequestClose={() => { setShowModal(false); }} contentLabel='assas'
        messege = {editModal}/>}
    </>
  );
};

export default EditJobItem;
