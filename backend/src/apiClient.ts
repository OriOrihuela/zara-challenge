import axios, { type AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://prueba-tecnica-api-tienda-moviles.onrender.com',
  headers: {
    'x-api-key': '87909682e6cd74208f41a6ef39fe4191'
  }
});
