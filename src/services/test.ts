import axios, { AxiosInstance } from 'axios';

export const apiCars: AxiosInstance = axios.create({
  baseURL: 'https://avto-showroom.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
