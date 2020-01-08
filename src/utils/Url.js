import { config } from '../api/config';

const getURL = (url) => config.host + url;

export default { getURL };