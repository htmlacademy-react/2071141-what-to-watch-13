import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES, NameSpace } from '../../const';
import { TFilm } from '../../types/film';

const initialState = {
  activeGenre: ALL_GENRES,
};

export const genreProcess = createSlice({
  name: NameSpace.Genres,
  initialState,
  reducers: {
    setGenreAction: (state, action: PayloadAction<TFilm['genre']>) => {
      state.activeGenre = action.payload;
    },
  },
});

export const { setGenreAction } = genreProcess.actions;
