import axios from 'axios';

export const imagesAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
