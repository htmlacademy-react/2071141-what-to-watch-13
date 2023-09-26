import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchFilmsAction } from '../api-actions';
import { TFilmsData } from '../../types/state';

const initialState: TFilmsData = {
  film: undefined,
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
      });
  },
});
