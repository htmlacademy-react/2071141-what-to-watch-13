import { ChangeEvent, Fragment, useState } from 'react';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, ratingMap } from '../../const';

function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleInpurtChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFarmSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const reviewData = {
      rating: rating,
      comment: comment,
    };
    console.log(reviewData);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFarmSubmit}>
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
                    onChange={handleInpurtChange}
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
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={MIN_COMMENT_LENGTH}
            maxLength={MAX_COMMENT_LENGTH}
            value={comment}
            onChange={handleTextAreaChange}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
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
