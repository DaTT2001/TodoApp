import React, { useState } from 'react';
import header from './Header.module.css';
import { useTodo } from '../../../context/Provider';
import { changeFilter } from '../../../stores/actions';
import Form from '../../todos/Form/Form';

const Header = (): JSX.Element => {
  const { state, dispatch } = useTodo();
  const [activeFilter, setActiveFilter] = useState('all');
  const jobs = state.jobs;
  const handleClick = (value: string): void => {
    dispatch(changeFilter(value));
    setActiveFilter(value);
  };
  const getJobsCount = (filter: string): number => {
    switch (filter) {
    case 'active':
      return jobs.filter(job => job.isActive).length;
    case 'complete':
      return jobs.filter(job => job.isCompleted).length;
    default:
      return jobs.length;
    }
  };
  return (
    <div className={header.container}>
      <div className={header.title}>
        <div className={header.customIcon}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Microsoft_To-Do_icon.svg/2515px-Microsoft_To-Do_icon.svg.png' width={'50px'}></img>
          <span>Todo App</span>
        </div>
        <Form/>
      </div>
      <div className={header.filterBtn}>
        <div onClick={() => handleClick('all')} className={activeFilter === 'all' ? header.active : ''}>
          <i className={'bi bi-circle-fill ' + header.filterIconAll}></i>
          <button>All task <span className={header.jobsCount}>({getJobsCount('all')})</span></button>
        </div>
        <div onClick={() => handleClick('active')} className={activeFilter === 'active' ? header.active : ''}>
          <i className={'bi bi-circle-fill ' + header.filterIconActive}></i>
          <button>Active task <span className={header.jobsCount}>({getJobsCount('active')})</span></button>
        </div>
        <div onClick={() => handleClick('complete')} className={activeFilter === 'complete' ? header.active : ''}>
          <i className={'bi bi-circle-fill ' + header.filterIconComplete}></i>
          <button>Complete task <span className={header.jobsCount}>({getJobsCount('complete')})</span></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
