import { useParams } from 'react-router-dom';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFilm,
  getFilmFetchingStatus,
  getFilms,
} from '../../store/films-data/films-data-selectors';
import { RequestStatus } from '../../const';
import PageNotFound from '../page-not-found/page-not-found';

function Film(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);
  const filmFetchingStatus = useAppSelector(getFilmFetchingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  const similarFilms = useAppSelector(getFilms);

  if (filmFetchingStatus === RequestStatus.Pending) {
    return <div>Loading...</div>;
  }

  return filmFetchingStatus === RequestStatus.Success && film ? (
    <>
      <FilmCardFull film={film} />
      <MoreLikeThis films={similarFilms.slice(0, 3)} />
    </>
  ) : (
    <PageNotFound />
  );
}

export default Film;
