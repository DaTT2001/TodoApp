import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://todoapi-3m8o.onrender.com/',
  responseType: 'json',
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
