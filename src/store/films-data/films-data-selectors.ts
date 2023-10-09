import { NameSpace } from '../../const';
import { TAppState, TFilmsData } from '../../types/state';

export const getFilms = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['films'] => state[NameSpace.Films].films;
export const getFilmsFetchingStatus = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['fetchingStatus'] => state[NameSpace.Films].fetchingStatus;
export const getFilm = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['film'] | null => state[NameSpace.Films].film;
export const getFilmFetchingStatus = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['fetchingStatus'] => state[NameSpace.Films].fetchingStatus;
export const getSimilarFilms = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['similarFilms'] => state[NameSpace.Films].similarFilms;
export const getPromoFilm = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['promoFilm'] => state[NameSpace.Films].promoFilm;
export const getPromoFilmFetchingStatus = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['fetchingStatus'] => state[NameSpace.Films].fetchingStatus;
export const getMyList = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['myList'] => state[NameSpace.Films].myList;
export const getReviews = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['reviews'] => state[NameSpace.Films].reviews;
export const getReviewsFetchingStatus = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['fetchingStatus'] => state[NameSpace.Films].fetchingStatus;
