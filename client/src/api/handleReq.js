import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://127.0.0.1:8080/api/';
const accessToken = Cookies.get('accessToken');

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const getRequest = (endpoint) => axiosInstance.get(endpoint);
export const putRequest = (endpoint, data) => axiosInstance.put(endpoint, data);
export const postRequest = (endpoint, data) =>
  axiosInstance.post(endpoint, data);
export const deleteRequest = (endpoint) => axiosInstance.delete(endpoint);
