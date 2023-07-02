import React, { useState } from 'react';
import header from './Header.module.css';
import { FilterType, LOGO_LINK } from '../../shared/constants';
import { useTodo } from '../../dataContext/TodoProvider';
import { changeFilter } from '../../dataContext/helpers';

const Header = (): JSX.Element => {
  const { state, dispatch } = useTodo();
  const [activeFilter, setActiveFilter] = useState('all');
  const jobs = state.jobs;
  const handleClick = (value: string): void => {
    dispatch(changeFilter(value));
    setActiveFilter(value);
  };
  const getJobsAmount = (filter: string): number => {
    switch (filter) {
    case FilterType.ACTIVE:
      return jobs.filter(job => job.isActive).length;
    case FilterType.COMPLETE:
      return jobs.filter(job => job.isCompleted).length;
    default:
      return jobs.length;
    }
  };
  function capitalizeFirstLetter (str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className={header.container}>
      <div className={header.title}>
        <div className={header.customIcon}>
          <img src={LOGO_LINK} width={'50px'}></img>
          <span>Todos</span>
        </div>
      </div>
      <div className={header.filterBtn}>
        {[FilterType.ALL, FilterType.ACTIVE, FilterType.COMPLETE].map((filter) => (
          <div key={filter} onClick={() => handleClick(filter)} className={activeFilter === filter ? header.active : ''}>
            <i className={'bi bi-circle-fill ' + header[`filterIcon${capitalizeFirstLetter(filter)}`]}></i>
            <button>{capitalizeFirstLetter(filter)} task <span className={header.jobsCount}>({getJobsAmount(filter)})</span></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
