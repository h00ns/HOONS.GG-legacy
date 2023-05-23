import axios from 'axios'
import { MINUTE } from 'constants/time';

let baseURL = ``;

const API = axios.create({
  baseURL: baseURL,
  timeout: 3 * MINUTE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default API;