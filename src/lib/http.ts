import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../config';

export enum EHttpStatus {
  SUCCESS = 200,
}

export class APIError extends Error {
  data: AxiosResponse;

  constructor(data: AxiosResponse) {
    super();
    this.data = data;
  }
}

export const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default axiosInstance;
