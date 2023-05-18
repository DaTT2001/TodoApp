import React, { useState, useEffect } from 'react';
import { setTodo, updateTodo } from '../../../stores/actions';
import { useTodo } from '../../../context/Provider';
import form from './Form.module.css';
import Toast from '../../shared/Toast/Toast';
import { addTask } from '../../../services/api';
import { defaultTask, Task } from '../../../stores/types';
import { v4 as uuidv4 } from 'uuid';

const Form = (): JSX.Element => {
  const [toastVisible, setToastVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    timestamp: 0,
    isActive: true,
    isCompleted: false
  });
  useEffect(() => {
    console.log(task);
  }, [task]);
  const { dispatch } = useTodo();

  const handleModal = (): void => {
    setShowModal(!showModal);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const date = new Date(event.target.value);
    setTask({ ...task, timestamp: date.getTime() });
  };
  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (task.title.trim() === '' || task.timestamp === 0) {
      return;
    }
    const newTask = {
      ...task,
      id: uuidv4()
    };
    setTask(newTask);
    console.log(newTask);
    dispatch(setTodo(newTask));
    dispatch(updateTodo(newTask));
    void addTask(newTask);
    setToastVisible(true);
    setTask(defaultTask);
    setShowModal(false);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }

  return (
    <>
      <button className={form.addBtn} onClick={handleModal}><i className={'bi bi-calendar-plus-fill ' + form.addIcon}></i></button>
      {showModal && (
        <div className={form.modal}>
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
              <button>Add</button>
            </form>
          </div>
        </div>
      )}
      {/* Toast message */}
      {toastVisible && <Toast message='Công việc đã được thêm thành công!' />}
    </>
  );
};

export default Form;
