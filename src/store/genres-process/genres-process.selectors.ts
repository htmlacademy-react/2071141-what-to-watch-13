import { NameSpace } from '../../const';
import { TAppState, TGenreProcess } from '../../types/state';

export const getActiveGenre = (
  state: Pick<TAppState, NameSpace.Genres>
): TGenreProcess['genres'] => state[NameSpace.Genres].activeGenre;
