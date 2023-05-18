import axios from 'axios';
import { Task } from '../stores/types';

const API_URL = 'https://todoapi-3m8o.onrender.com/todos';

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if ((Boolean(error.response)) && error.response.status === 404) {
      console.log('Không tìm thấy tài nguyên');
    }
    return await Promise.reject(error);
  }
);

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
