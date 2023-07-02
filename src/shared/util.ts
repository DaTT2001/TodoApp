import { DAY_MS, HOUR_MS, MINUTES_MS, SECOND_MS } from './constants';
import { Time } from './interfaces';
import moment from 'moment';
export const getTimeByDistance = (distance: number): Time => {
  const day = Math.floor(distance / (DAY_MS));
  const hour = Math.floor((distance % (DAY_MS)) / (HOUR_MS));
  const minute = Math.floor((distance % (HOUR_MS)) / (MINUTES_MS));
  const second = Math.floor((distance % (MINUTES_MS)) / SECOND_MS);
  return { day, hour, minute, second };
};
export const formatTimestamp = (timestamp: number): string => {
  const date = moment(timestamp);
  const formattedDate = date.format('YYYY-MM-DDTHH:mm');
  return formattedDate;
};
export const getTimeStamp = (datetime: string): number => {
  const date = moment(datetime, 'YYYY-MM-DDTHH:mm');
  return date.valueOf();
};
export const checkAndTrimString = (str: string, length: number): string => {
  if (str.length > length) {
    return str.slice(0, length - 3) + '...';
  }
  return str;
};
