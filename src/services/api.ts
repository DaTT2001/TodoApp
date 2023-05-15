import axios from 'axios';
import { Task } from '../stores/types';

const API_URL = 'https://new-api-sandy.vercel.app/todos';

// get dữ liệu ban đầu
export async function getTodos (): Promise<Task[]> {
  const response = await axios.get(`${API_URL}`);
  return response.data;
}
//
export async function addTask (task: Task): Promise<void> {
  await axios.post(`${API_URL}`, task);
}
export async function deleteTask (id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}
export async function completeTask (id: string, isCompleted: boolean, isActive: boolean): Promise<void> {
  await axios.patch(`${API_URL}/${id}`, { isCompleted, isActive });
}
export async function editTask (id: string, title: string, timestamp: number): Promise<void> {
  await axios.patch(`${API_URL}/${id}`, { title, timestamp });
}
