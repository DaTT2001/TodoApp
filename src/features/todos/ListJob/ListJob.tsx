import React, { useMemo } from 'react';
import listJob from './ListJob.module.css';
import JobItem from '../JobItem/JobItem';
import { Task } from '../../../shared/interfaces';
import Loading from '../../../shared/components/loading/Loading';
import { FilterType } from '../../../shared/constants';
import { useTodo } from '../../../dataContext/TodoProvider';
import Form from '../Form/Form';

const ListJob = (): JSX.Element => {
  const { state } = useTodo();
  const { jobs } = state;
  const getFilteredJobs = (): Task[] => {
    switch (state.filter) {
    case FilterType.ACTIVE:
      return jobs.filter(job => job.isActive);
    case FilterType.COMPLETE:
      return jobs.filter(job => job.isCompleted);
    default:
      return jobs;
    }
  };
  const filteredJobs = useMemo(() => getFilteredJobs(), [state.filter, jobs]);
  return (
    <>
      {state.isLoading
        ? <div className={listJob.ldContainer}><Loading/></div>
        : filteredJobs.length === 0
          ? <><Form/><div className={listJob.empty}>No jobs are listed </div></>
          : <><Form/><ul className={listJob.listJob}>
            {filteredJobs.map((job, index) => {
              return <li key={job.id}><JobItem job={job} index={index} /></li>;
            })}
          </ul>
          </>
      }
    </>
  );
};

export default ListJob;
