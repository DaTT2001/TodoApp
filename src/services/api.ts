import { Task } from '../store/types'
import axios from 'axios'

const API_URL = 'http://localhost:3006/todos';

// get dữ liệu ban đầu
export async function getTodos(): Promise<Task[]> {
    const response = await axios.get(`${API_URL}`);
    return response.data;
}
//
export async function addTask(task: Task): Promise<void> {
   await axios.post(`${API_URL}`, task);
}
export async function deleteTask(id: string): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
}
export async function completeTask(id: string, isCompleted: boolean, isActive: boolean):Promise<void> {
    await axios.patch(`${API_URL}/${id}`, {isCompleted, isActive});
}
