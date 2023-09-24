import { combineReducers } from '@reduxjs/toolkit';
import { filmsData } from './films-data/fims-data.slice';
import { genreProcess } from './genres-process/genres-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Genres]: genreProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
