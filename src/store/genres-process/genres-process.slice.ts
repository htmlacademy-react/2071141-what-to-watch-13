import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { TFilm } from '../../types/film';

const initialState = {
  activeGenre: DEFAULT_GENRE,
};

export const genreProcess = createSlice({
  name: NameSpace.Genres,
  initialState,
  reducers: {
    changeGenreAction: (state, action: PayloadAction<TFilm['genre']>) => {
      state.activeGenre = action.payload;
    },
  },
});

export const { changeGenreAction } = genreProcess.actions;
