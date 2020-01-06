import { config } from '../api/config';
import axios from "axios";

const getURL = (uri) => config.host + uri;

const getData = (uri) => {
  return new Promise((resolve, reject) => {
    axios.get(getURL(uri)).then(res => {
      resolve(res.data);
    }).catch(err => reject(err));
  });
};

export default { getURL, getData };