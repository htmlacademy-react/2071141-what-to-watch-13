import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import {
  addReviewAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchMyListAction,
  fetchPromoFilmAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction,
} from '../api-actions';
import { TFilmsData } from '../../types/state';

const initialState: TFilmsData = {
  film: null,
  films: [],
  similarFilms: [],
  promoFilm: null,
  myList: [],
  reviews: [],
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
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.similarFilms = action.payload;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.promoFilm = action.payload;
      })
      .addCase(fetchMyListAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchMyListAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.myList = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      });
  },
});
