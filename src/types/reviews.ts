export type TAddReview = {
  comment: string;
  rating: number;
};

type TReview = {
  id: string;
  date: string;
  user: string;
} & TAddReview;

export type TReviews = TReview[];
