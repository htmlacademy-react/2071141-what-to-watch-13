import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { filmsMock } from '../../mock/films';

const initialState = {
  film: undefined,
  films: filmsMock,
  reviews: [],
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
});
