import { config } from './config';
import {getDateTime} from "../utils/DateTime";
import axios from "axios";
import Url from "../utils/Url";

export const addEvent = (formElements) => {
    return axios.post(Url.getURL(config.event.add), {
        title: formElements.title.value,
        datetime: getDateTime(formElements.date.value, formElements.timeHours.value, formElements.timeMinutes.value),
        timeHours: formElements.timeHours.value,
        timeMinutes: formElements.timeMinutes.value,
        address: formElements.address.value,
        phone: formElements.phone.value,
        short_description: formElements.short_description.value,
        description: formElements.description.value,
        cost: formElements.cost.value,
        tags: formElements.tags.value,
        age_limit: formElements.age_limit.value,
        image: formElements.image.value
    })
      .then(res => {
          console.log(res.data);
      })
      .catch(err => {
          console.log(err);
      });
};

export const getAllEvents = () => {
    return new Promise((resolve, reject) => {
        axios.get(Url.getURL(config.event.getAll))
          .then(res => {
            resolve(res.data);
          })
          .catch(err => reject(err));
    });
};