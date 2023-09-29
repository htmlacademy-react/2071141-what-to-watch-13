import { AxiosInstance } from 'axios';
import { TAppDispatch, TAppState } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, NameSpace } from '../const';
import { TFilms } from '../types/films';
import { TFilm } from '../types/film';

type TExtra = {
  dispatch: TAppDispatch;
  state: TAppState;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<TFilms[], undefined, TExtra>(
  `${NameSpace.Films}/fetchFilms`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TFilms[]>(APIRoute.Films);
    return data;
  }
);

export const fetchFilmAction = createAsyncThunk<TFilm, TFilm['id'], TExtra>(
  `${NameSpace.Films}/fetchFilm`,
  async (id, { extra: api }) => {
    const { data } = await api.get<TFilm>(`${APIRoute.Films}/${id}`);
    return data;
  }
);
