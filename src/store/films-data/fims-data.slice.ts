import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchFilmAction, fetchFilmsAction } from '../api-actions';
import { TFilmsData } from '../../types/state';

const initialState: TFilmsData = {
  film: null,
  films: [],
  // reviews: [],
  fetchingStatus: RequestStatus.Idle,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.films = action.payload;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.film = action.payload;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      });
  },
});
