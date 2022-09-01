import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application.json',
    accept: 'application/json',
  },
});
