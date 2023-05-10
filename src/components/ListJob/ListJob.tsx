import { useState} from 'react'
import { useTodo } from '../../context/Provider';
import listJob from './ListJob.module.css'  
import JobItem from '../JobItem/JobItem';

const ListJob = () => {
    const {state} = useTodo();
    const {job, jobs} = state
    const [filter, setFilter] = useState('all');
    const [activeFilter, setActiveFilter] = useState('all');
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
        setActiveFilter(newFilter);
    };

  return (
    <>
        <ul className={listJob.listJob}>
            {jobs.length > 0 && getFilteredJobs().map((job, index) => {
                return <JobItem key={job.id} job={job} index={index} />;
            })}             
        </ul>
        <div className={listJob.filter}>
                <button className={activeFilter === 'all' ? listJob.active : ''} onClick={() => handleFilterChange('all')}>
                <p><span>{jobs.length}</span>All</p>
                </button>
                <button className={activeFilter === 'active' ? listJob.active : ''} onClick={() => handleFilterChange('active')}>
                <p><span>{jobs.filter(job => job.isActive).length}</span>Active</p>
                </button>
                <button className={activeFilter === 'completed' ? listJob.active : ''} onClick={() => handleFilterChange('completed')}>
                <p><span>{jobs.filter(job => job.isCompleted).length}</span>Complete</p>
                </button>
        </div>
    </>
  )
}

export default ListJob