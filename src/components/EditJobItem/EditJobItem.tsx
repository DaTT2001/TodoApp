import React, {useState} from 'react'
import edit from './EditJobItem.module.css'
import { Task } from '../../store/types';
import { useTodo } from '../../context/Provider';
import { editJob } from '../../store/actions';
import { editTask } from '../../services/api';

interface Props {
  job: Task;
}

const EditJobItem = ({ job }: Props) => {

const { state, dispatch } = useTodo();
const [showModal, setShowModal] = useState(false);
const [title, setTitle] = useState<string>(job.title);

function handleClick() {
    setShowModal(!showModal);
}
function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
}
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(editJob({id: job.id, title: title}))
    editTask(job.id, title);
    setShowModal(false);
}
console.log(title);
return (
    <>
        <span onClick={handleClick}>Edit</span>
        {showModal && <div className={edit.modal}>
            <div className={edit.modalContent}>
              <div className={edit.modalHeader}>
                <h2>Edit Task</h2>
                <span className={edit.modalClose} onClick={handleClick}>Close</span>
              </div>
              <form onSubmit={handleSubmit} className={edit.form}>
                <input value={title} type="text" onChange={handleChangeInput}/>
                <input className={edit.inputTime} type="datetime-local" />
                <button>Submit</button>
              </form>
            </div>
          </div>}
    </>
  )
}

export default EditJobItem