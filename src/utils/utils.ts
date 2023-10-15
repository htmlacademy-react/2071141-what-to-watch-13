import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TReview } from '../types/reviews';

dayjs.extend(duration);

export function getTimeFromMins(mins: number): string {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

export function getReviewDate(date: TReview['date']): string {
  return dayjs(date).format('MMMM DD, YYYY');
}

export const getVideoTimeFormat = (time: number): string => {
  const dur = dayjs.duration(time, 'seconds');
  return dur.format('HH:mm:ss');
};
