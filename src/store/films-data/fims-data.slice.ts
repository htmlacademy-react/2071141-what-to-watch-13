import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  film: undefined,
  films: [],
  reviews: [],
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
});
