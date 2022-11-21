import axios from 'axios';

export const choiceTecApi = axios.create({
  baseURL: 'http://localhost:4002/api'
})