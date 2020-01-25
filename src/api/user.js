import {config} from './config';
import axios from 'axios';
import Url from '../utils/Url';

export const register = (formElements) => {
  return axios.post(Url.getURL(config.user.register), {
    first_name: formElements.first_name.value,
    last_name: formElements.last_name.value,
    email: formElements.email.value,
    password: formElements.password.value
  })
    .then(res => res.data)
    .catch(err => err);
};

export const update = (user) => {
  return axios.post(Url.getURL(config.user.update), user)
    .then(res => res.data)
    .catch(err => err);
};

export const login = (formElements) => {
  return axios.post(Url.getURL(config.user.login), {
    email: formElements.email.value,
    password: formElements.password.value
  })
    .then(res => {
      if (res.data.token) localStorage.setItem('usertoken', res.data.token);
      return res.data;
    })
    .catch(err => err);
};

export const validateUser = (history) => {
  profile();
  if (!localStorage.usertoken) history.push('/user/login');
};

export const logout = () => {
  if (localStorage.usertoken) {
    localStorage.clear();
  }
};

export const profile = () => {
  return new Promise((resolve, reject) => {
    if (localStorage.usertoken) {
      axios
        .get(Url.getURL(config.user.profile), {
          headers: {
            authorization: localStorage.usertoken
          }
        })
        .then(res => resolve(res.data))
        .catch(err => {
          logout();
          reject(err)
        });
    } else {
      reject('Empty token!');
    }
  });
};