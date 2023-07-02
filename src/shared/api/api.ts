import axios from 'axios';
import { Task } from '../interfaces';
import { axiosClient } from './config';

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

export async function getTodos (): Promise<Task[]> {
  const response = await axiosClient.get('todos');
  return response.data;
}
export async function addTask (task: Task): Promise<void> {
  await axiosClient.post('todos', task);
}
export async function deleteTask (id: string): Promise<void> {
  await axiosClient.delete(`todos/${id}`);
}
export async function completeTask (id: string, isCompleted: boolean, isActive: boolean): Promise<void> {
  await axiosClient.patch(`todos/${id}`, { isCompleted, isActive });
}
export async function editTask (id: string, title: string, timestamp: number): Promise<void> {
  await axiosClient.patch(`todos/${id}`, { title, timestamp });
}
