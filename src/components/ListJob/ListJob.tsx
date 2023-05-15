import React, { useState } from 'react';
import { useTodo } from '../../context/Provider';
import listJob from './ListJob.module.css';
import JobItem from '../JobItem/JobItem';
import { Task } from '../../stores/types';

const ListJob = (): JSX.Element => {
  const { state } = useTodo();
  const { jobs } = state;
  const [filter, setFilter] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const getFilteredJobs = (): Task[] => {
    switch (filter) {
    case 'active':
      return jobs.filter(job => job.isActive);
    case 'completed':
      return jobs.filter(job => job.isCompleted);
    default:
      return jobs;
    }
  };
  // Hàm để thay đổi filter
  const handleFilterChange = (newFilter: string): void => {
    setFilter(newFilter);
    setActiveFilter(newFilter);
  };

  return (
    <>
      <ul className={listJob.listJob}>
        {jobs.length > 0 && getFilteredJobs().map((job, index) => {
          return <JobItem key={job.id} job={job} index={index} />;
        })}
      </ul>
      {jobs.length !== 0 &&
      <div className={listJob.filter}>
        <button className={activeFilter === 'all' ? listJob.active : ''} onClick={() => handleFilterChange('all')}>
          <p>All<span>({jobs.length})</span></p>
        </button>
        <button className={activeFilter === 'active' ? listJob.active : ''} onClick={() => handleFilterChange('active')}>
          <p>Active<span>({jobs.filter(job => job.isActive).length})</span></p>
        </button>
        <button className={activeFilter === 'completed' ? listJob.active : ''} onClick={() => handleFilterChange('completed')}>
          <p>Complete<span>({jobs.filter(job => job.isCompleted).length})</span></p>
        </button>
      </div>
      }
    </>
  );
};

export default ListJob;
