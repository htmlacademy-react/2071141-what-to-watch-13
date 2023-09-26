export const MAX_GENRES_COUNT = 9;

export const ALL_GENRES = 'All genres';

export enum NameSpace {
  Films = 'FILMS',
  Genres = 'GENRES',
  User = 'USER',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = 'films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Film = '/film',
  Films = '/films',
  MyList = '/mylist',
  Review = '/review',
}

export enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Rejected = 'Rejected',
}

export const ratingMap = {
  '10': 'awesome',
  '9': 'very good',
  '8': 'very good',
  '7': 'good',
  '6': 'good',
  '5': 'good',
  '4': 'normal',
  '3': 'normal',
  '2': 'bad',
  '1': 'bad',
};

export const MIN_COMMENT_LENGTH = 5; //потом исправить на 50!!!

export const MAX_COMMENT_LENGTH = 400;
