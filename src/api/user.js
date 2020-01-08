import { config } from './config';
import axios from "axios";
import Url from "../utils/Url";

export const register = (formElements) => {
  return axios.post(Url.getURL(config.user.register), {
    first_name: formElements.first_name.value,
    last_name: formElements.last_name.value,
    email: formElements.email.value,
    password: formElements.password.value
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = (formElements) => {
  return axios.post(Url.getURL(config.user.login), {
    email: formElements.email.value,
    password: formElements.password.value
  })
    .then(res => {
      if (!res.data.error) {
        localStorage.setItem('usertoken', res.data);
      }
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};