import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {config} from './config';
import Url from '../utils/Url';

export const addEvent = (formData) => {
  const token = localStorage.usertoken;
  const decoded = jwt_decode(token);
  formData.append('created_by', decoded._id);
  return axios
    .post(Url.getURL(config.event.add), formData)
    .then(res => res)
    .catch(err => err);
};

export const likeEvent = (formData) => {
  const token = localStorage.usertoken;
  const decoded = jwt_decode(token);
  formData.append('created_by', decoded._id);
  return axios
    .post(Url.getURL(config.event.add), formData)
    .then(res => res)
    .catch(err => err);
};

export const getAllEvents = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(Url.getURL(config.event.getAll))
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const getEventById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(Url.getURL(config.event.getById.replace('{ID}', id)))
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const getMultipleEventsByIds = (ids) => {
  return new Promise((resolve, reject) => {
    axios
      .get(Url.getURL(config.event.getMultipleByIds), {params: {ids: ids}})
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};