import React, {useState} from 'react'
import edit from './EditJobItem.module.css'
import { Task } from '../../store/types';

interface Props {
  job: Task;
}

const EditJobItem = ({ job }: Props) => {

const [showModal, setShowModal] = useState(false);

function handleClick() {
    setShowModal(!showModal);
}
function handleChangeInput() {}
return (
    <>
        <span onClick={handleClick}>Edit</span>
        {showModal && <div className={edit.modal}>
            <div className={edit.modalContent}>
              <div className={edit.modalHeader}>
                <h2>Edit Task</h2>
                <span className={edit.modalClose} onClick={handleClick}>Close</span>
              </div>
              <form className={edit.form}>
                <input value={job.title} type="text" onChange={handleChangeInput}/>
                <input className={edit.inputTime} type="datetime-local" />
                <button>Submit</button>
              </form>
            </div>
          </div>}
    </>
  )
}

export default EditJobItem