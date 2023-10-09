import { useAppSelector } from '../../../hooks';
import {
  getReviews,
  getReviewsFetchingStatus,
} from '../../../store/films-data/films-data-selectors';
import { RequestStatus } from '../../../const';

function TabReviews(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const reviewsFetchingStatus = useAppSelector(getReviewsFetchingStatus);

  if (reviewsFetchingStatus === RequestStatus.Pending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          {reviews.map((review) => (
            <>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user}</cite>
                  <time className="review__date" dateTime={review.date}>
                    {review.date}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </>
          ))}
          ;
        </div>
      </div>
    </div>
  );
}

export default TabReviews;
