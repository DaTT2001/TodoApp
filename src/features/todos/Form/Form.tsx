import React, { useState } from 'react';
import { useTodo } from '../../../dataContext/TodoProvider';
import form from './Form.module.css';
import { addTask } from '../../../shared/api/api';
import { Task } from '../../../shared/interfaces';
import { DEFAULT_TASK } from '../../../shared/constants';
import { v4 as uuidv4 } from 'uuid';
import Notification from '../../../shared/components/notification/Notification';
import { setTodo, updateTodo } from '../../../dataContext/helpers';
import { toast } from 'react-toastify';

const Form = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState<Task>(DEFAULT_TASK);
  const { dispatch } = useTodo();

  const handleModal = (): void => {
    setShowModal(!showModal);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const date = new Date(event.target.value);
    setTask({ ...task, timestamp: date.getTime() });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (task.title.trim() === '' || task.timestamp === 0) {
      return;
    }
    const newTask: Task = {
      ...task,
      id: uuidv4()
    };
    setTask(newTask);
    dispatch(setTodo(newTask));
    dispatch(updateTodo(newTask));
    void addTask(newTask);
    setShowModal(false);
    toast.success('Task add completed!');
    setTask(DEFAULT_TASK);
  };
  const modalContent = (
    <div className={form.modalContent}>
      <div className={form.modalHeader}>
        <h2>Add Task</h2>
        <span className={form.modalClose} onClick={handleModal}><i className="bi bi-x-circle-fill"></i></span>
      </div>
      <form onSubmit={handleSubmit} className={form.form}>
        <div className={form.formContent}>
          <p>Task Name: </p>
          <input placeholder='What needs to be done?' type="text" value={task.title} className={form.inputText} onChange={e => {
            setTask({ ...task, title: e.target.value });
          }}/>
          <p>Deadline: </p>
          <input className={form.inputTime} onChange={handleChange} type="datetime-local" />
        </div>
        <div className={form.button}>
          <button onClick={handleModal} className={form.btnCancel}>Cancel</button><button className={form.btnSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
  return (
    <div className={form.container}>
      <div className={form.formHeader}>
        <div className={form.add} onClick={handleModal}>
          <i className={'bi bi-calendar-plus-fill ' + form.addIcon}></i>
        </div>
      </div>
      <Notification isOpen={showModal} onRequestClose={handleModal} contentLabel='asdadas' messege={modalContent} />
    </div>
  );
};

export default Form;
