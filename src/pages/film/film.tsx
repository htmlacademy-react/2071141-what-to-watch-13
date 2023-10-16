import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFilm,
  getFilmFetchingStatus,
  getSimilarFilms,
} from '../../store/films-data/films-data-selectors';
import {
  fetchFilmAction,
  fetchMyListAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction,
} from '../../store/api-actions';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import PageNotFound from '../page-not-found/page-not-found';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';
import { RequestStatus } from '../../const';

function Film(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);
  const filmFetchingStatus = useAppSelector(getFilmFetchingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchMyListAction());
    }
  }, [id, dispatch]);

  const similarFilms = useAppSelector(getSimilarFilms);

  if (filmFetchingStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return filmFetchingStatus === RequestStatus.Success && film ? (
    <>
      <Helmet>
        <title>What to Watch. {film.name}</title>
      </Helmet>
      <FilmCardFull film={film} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCardsList films={similarFilms.slice(0, 4)} />
        </section>
        <Footer />
      </div>
    </>
  ) : (
    <PageNotFound />
  );
}

export default Film;
