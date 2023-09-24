import { NameSpace } from '../../const';
import { TAppState, TGenreProcess } from '../../types/state';

export const getActiveGenreChange = (
  state: Pick<TAppState, NameSpace.Genres>
): TGenreProcess['genres'] => state[NameSpace.Genres].activeGenre;
