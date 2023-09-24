import { NameSpace } from '../../const';
import { TFilms } from '../../types/films';
import { TAppState } from '../../types/state';

export const getFilms = (state: Pick<TAppState, NameSpace.Films>): TFilms[] =>
  state[NameSpace.Films].films;
