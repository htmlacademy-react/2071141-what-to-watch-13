import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store/index';
import { TFilm } from './film';
import { TFilms } from './films';
import { TUser } from './user';

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export type TFilmsData = {
  films: TFilms[];
  film: TFilm | null;
  fetchingStatus: RequestStatus;
};

export type TGenreProcess = {
  genres: TFilm['genre'];
};

export type TUserProcess = {
  user: TUser | null;
  authorizationStatus: AuthorizationStatus;
};
