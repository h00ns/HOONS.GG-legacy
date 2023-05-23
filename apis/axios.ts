import axios from 'axios'

let baseURL = ``;

const api = axios.create({
  baseURL: baseURL,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api;