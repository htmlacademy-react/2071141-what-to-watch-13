import { useEffect } from 'react';
import Catatog from '../../components/catalog/catalog';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import FilterGenre from '../../components/filter-genre/filter-genre';
import { ALL_GENRES, MAX_GENRES_COUNT, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchFilmsAction,
  fetchMyListAction,
  fetchPromoFilmAction,
} from '../../store/api-actions';
import {
  getFilms,
  getFilmsFetchingStatus,
} from '../../store/films-data/films-data-selectors';
import { getActiveGenre } from '../../store/genres-process/genres-process.selectors';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
    dispatch(fetchPromoFilmAction());
    dispatch(fetchMyListAction());
  }, [dispatch]);

  const films = useAppSelector(getFilms);
  const filmsFetchingStatus = useAppSelector(getFilmsFetchingStatus);

  const activeGenre = useAppSelector(getActiveGenre);
  const genres = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

  const filmsByGenre =
    activeGenre === ALL_GENRES
      ? films
      : films.filter((film) => film.genre === activeGenre);

  if (filmsFetchingStatus === RequestStatus.Pending) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FilmCardPromo />
      <div className="page-content">
        <section className="catalog">
          <FilterGenre
            genres={genres.slice(0, MAX_GENRES_COUNT)}
            activeGenre={activeGenre}
          />
          <Catatog films={filmsByGenre} />
        </section>
      </div>
    </>
  );
}

export default Main;
