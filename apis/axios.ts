import axios, { AxiosRequestConfig } from 'axios'
import { MINUTE } from 'constants/time';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const API = axios.create({
  baseURL: baseURL,
  timeout: 3 * MINUTE,
  headers: {
    'Content-Type': 'application/json',
  },
})

/* request */
API.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    config.headers!['X-Riot-Token'] = API_KEY!;
        
    return config;
  },

  function (error) {
    return Promise.reject(error);
  },
);

export default API;