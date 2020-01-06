import { config } from './config';
import Url from '../utils/Url';

export const getEvents = () => Url.getData(config.event.getAll);