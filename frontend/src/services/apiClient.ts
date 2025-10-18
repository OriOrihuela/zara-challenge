import axios from 'axios';

const apiConfig = {
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const apiClient = axios.create(apiConfig);
