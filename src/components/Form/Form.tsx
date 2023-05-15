import React, { useState, useEffect } from 'react';
import { setTodo, updateTodo } from '../../stores/actions';
import { useTodo } from '../../context/Provider';
import form from './Form.module.css';
import Toast from '../Toast/Toast';
import { addTask } from '../../services/api';
import { initialTaskState, Task } from '../../stores/types';

const Form = (): JSX.Element => {
  function generateId (): string {
    const randomChars = Math.random().toString(36).substring(2, 8);
    const id = randomChars;
    return id;
  }
  const [toastVisible, setToastVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState<Task>({
    id: generateId(),
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
    setTask(task);
    console.log(task);
    dispatch(setTodo(task));
    dispatch(updateTodo(task));
    void addTask(task);
    setToastVisible(true);
    setTask(initialTaskState);
    setShowModal(false);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }

  return (
    <>
      <button className={form.addBtn} onClick={handleModal}>ADD</button>
      {showModal && (
        <div className={form.modal}>
          <div className={form.modalContent}>
            <div className={form.modalHeader}>
              <h2>Add Task</h2>
              <span className={form.modalClose} onClick={handleModal}>Close</span>
            </div>
            <form onSubmit={handleSubmit} className={form.form}>
              <input placeholder='What needs to be done?' type="text" value={task.title} className={form.inputText} onChange={e => {
                setTask({ ...task, title: e.target.value });
              }}/>
              <input className={form.inputTime} onChange={handleChange} type="datetime-local" />
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
