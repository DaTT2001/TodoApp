import { useState} from 'react'
import { useTodo } from '../../context/Provider';
import listJob from './ListJob.module.css'  
import JobItem from '../JobItem/JobItem';

const ListJob = () => {
    const {state} = useTodo();
    const {job, jobs} = state
    const [filter, setFilter] = useState('all');

    const getFilteredJobs = () => {
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
    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
    };

  return (
    <>
        <ul className={listJob.listJob}>
            {jobs.length > 0 && getFilteredJobs().map((job, index) => {
                return <JobItem key={job.id} job={job} index={index} />;
            })}             
        </ul>
        <div className={listJob.filter}>
                <button onClick={() => handleFilterChange('all')}>
                <p><span>{jobs.length}</span>All</p>
                </button>
                <button onClick={() => handleFilterChange('active')}>
                <p><span>{jobs.filter(job => job.isActive).length}</span>Active</p>
                </button>
                <button onClick={() => handleFilterChange('completed')}>
                <p><span>{jobs.filter(job => job.isCompleted).length}</span>Complete</p>
                </button>
        </div>
    </>
  )
}

export default ListJob