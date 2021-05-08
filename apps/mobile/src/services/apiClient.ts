import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:3000/api/v1';

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  // Token injection happens after auth storage is wired
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error.message || 'Network error';
    return Promise.reject(new Error(Array.isArray(message) ? message.join(', ') : message));
  },
);
