import dayjs from 'dayjs';
import { TReview } from '../types/reviews';

export function getTimeFromMins(mins: number): string {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

export function getReviewDate(date: TReview['date']): string {
  return dayjs(date).format('MMMM DD, YYYY');
}
