import React from 'react';
import { useTodo } from '../../../context/Provider';
import listJob from './ListJob.module.css';
import JobItem from '../JobItem/JobItem';
import { Task } from '../../../stores/types';
import Loading from '../../shared/Loading/Loading';

const ListJob = (): JSX.Element => {
  const { state } = useTodo();
  const { jobs } = state;
  const getFilteredJobs = (): Task[] => {
    switch (state.filter) {
    case 'active':
      return jobs.filter(job => job.isActive);
    case 'complete':
      return jobs.filter(job => job.isCompleted);
    default:
      return jobs;
    }
  };

  return (
    <>
      {state.isLoading
        ? <div className={listJob.ldContainer}><Loading/></div>
        : getFilteredJobs().length === 0
          ? <div className={listJob.empty}>No jobs are listed</div>
          : <ul className={listJob.listJob}>
            {jobs.length > 0 && getFilteredJobs().map((job, index) => {
              return <JobItem key={job.id} job={job} index={index} />;
            })}
          </ul>
      }
    </>
  );
};

export default ListJob;
