import React from 'react'
import { useState } from 'react';
import {setTodo, updateTodo, deleteTodo} from '../../store/actions';
import { useTodo } from '../../context/Provider';
import form from './Form.module.css'
import Toast from '../Toast/Toast';
import { addTask } from '../../services/api';

const Form = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [timestamp, setTimestamp] = useState<number>(0);
    const {state, dispatch} = useTodo();
    const {job} = state

    const handleModal = () => {
      setShowModal(!showModal);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = new Date(event.target.value);
      setTimestamp(date.getTime());
    };
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(job.title.trim() === '') {
          return
        }
        dispatch(updateTodo(job))
        addTask(job)
        setToastVisible(true);
        dispatch(setTodo(''))
        setShowModal(false)
        setTimeout(() => {
          setToastVisible(false);
        }, 3000);
        
    }

 
  return (
    <>  
        <button onClick={handleModal}>+ ADD</button>
        {showModal && (
          <div className={form.modal}>
            <div className={form.modalContent}>
              <div className={form.modalHeader}>
                <h2>Add Task</h2>
                <span className={form.modalClose} onClick={handleModal}>Close</span>
              </div>
              <form onSubmit={handleSubmit} className={form.form}>
                <input placeholder='What needs to be done?' type="text" value={job.title} className={form.inputText} onChange={e => {
                  dispatch(setTodo(e.target.value))
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
  )
}

export default Form