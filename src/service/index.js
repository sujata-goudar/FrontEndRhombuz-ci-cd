import axios from 'axios';
import qs from 'query-string';
import { baseURL } from '../constants';

export const client = axios.create({
  baseURL,
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token${1}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // Optionally catch errors and add additional logging here
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};

// GET with Axios
export const axiosGet = async (url, queryObj) => {
  const query = qs.stringify(queryObj);
  return await client.get(`${url}?${query}`);
};

// Post with Axios
export const axiosPostRequest = async (url, queryObj, bodyObj) => {
  const query = qs.stringify(queryObj);
  return await client.post(`${url}${query ? `? ${query}` : ''}`, bodyObj);
};

// PUT with Axios
export const axiosPutRequest = async (url, queryObj, bodyObj) => {
  const query = qs.stringify(queryObj);
  return await client.put(`${url}?${query}`, bodyObj);
};

// Delete with Axios
export const axiosDelete = async (id) => {
  return await client.delete(`${id}`);
};
