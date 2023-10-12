import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import {
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH,
  RequestStatus,
  ratingMap,
} from '../../const';
import { TFilm } from '../../types/film';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReviewsFetchingStatus } from '../../store/films-data/films-data-selectors';
import { addReviewAction } from '../../store/api-actions';

type TReviewFormProps = {
  id: TFilm['id'];
  backgroundColor: TFilm['backgroundColor'];
};

function ReviewForm({ id, backgroundColor }: TReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviewsFetchingStatus = useAppSelector(getReviewsFetchingStatus);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';
  // todo: валидация
  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const reviewData = {
      rating: Number(rating),
      comment: comment,
    };
    console.log(reviewData);
    dispatch(addReviewAction({ reviewData, id }));
  };

  useEffect(() => {
    if (reviewsFetchingStatus === RequestStatus.Success) {
      setComment('');
      setRating('');
    }
  }, [reviewsFetchingStatus]);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Object.entries(ratingMap)
              .reverse()
              .map(([score, value]) => (
                <Fragment key={score}>
                  <input
                    className="rating__input"
                    id={`star-${score}`}
                    type="radio"
                    name="rating"
                    value={score}
                    checked={rating === score}
                    onChange={handleInputChange}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${score}`}
                    title={value}
                  >
                    Rating
                  </label>
                </Fragment>
              ))}
          </div>
        </div>
        <div className="add-review__text" style={{ backgroundColor: 'black' }}>
          <textarea
            className="add-review__textarea"
            style={{ backgroundColor, opacity: 0.8 }}
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={MIN_COMMENT_LENGTH}
            maxLength={MAX_COMMENT_LENGTH}
            value={comment}
            onChange={handleTextAreaChange}
          />
          <div
            className="add-review__submit"
            style={{ backgroundColor, opacity: 0.8 }}
          >
            <button
              className="add-review__btn"
              style={{ backgroundColor }}
              type="submit"
              disabled={!isValid}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
