import { NameSpace } from '../../const';
import { TAppState, TFilmsData } from '../../types/state';

export const getFilms = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['films'] => state[NameSpace.Films].films;
export const getFilm = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['film'] | null => state[NameSpace.Films].film;
export const getFilmFetchingStatus = (
  state: Pick<TAppState, NameSpace.Films>
): TFilmsData['fetchingStatus'] => state[NameSpace.Films].fetchingStatus;
