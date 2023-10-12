import { useAppSelector } from '../../../hooks';
import {
  getReviews,
  getReviewsFetchingStatus,
} from '../../../store/films-data/films-data-selectors';
import { RequestStatus } from '../../../const';
import Review from '../../review/review';

function TabReviews(): JSX.Element {
  const reviewsList = useAppSelector(getReviews);
  const reviewsFetchingStatus = useAppSelector(getReviewsFetchingStatus);

  if (reviewsFetchingStatus === RequestStatus.Pending) {
    return <div>Loading...</div>;
  }

  if (reviewsList.length === 0) {
    return <div className="film-card__reviews film-card__row"></div>;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsList
          .slice(0, Math.ceil(reviewsList.length / 2))
          .map((review) => (
            <Review key={review.id} review={review} />
          ))}
        ;
      </div>
      <div className="film-card__reviews-col">
        {reviewsList
          .slice(Math.ceil(reviewsList.length / 2), reviewsList.length)
          .map((review) => (
            <Review key={review.id} review={review} />
          ))}
        ;
      </div>
    </div>
  );
}

export default TabReviews;
