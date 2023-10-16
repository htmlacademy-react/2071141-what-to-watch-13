import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserHeaderAuth from '../../components/user-header/user-header-auth';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFilm,
  getFilmFetchingStatus,
} from '../../store/films-data/films-data-selectors';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import { AppRoute, RequestStatus } from '../../const';
import PageNotFound from '../page-not-found/page-not-found';

function AddReview(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);
  const filmFetchingStatus = useAppSelector(getFilmFetchingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  if (filmFetchingStatus === RequestStatus.Pending || !film) {
    return <div>Loading...</div>;
  }

  if (!id) {
    return <PageNotFound />;
  }

  return (
    <section
      className="film-card film-card--full"
      style={{ backgroundColor: film.backgroundColor }}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Film}/${id}`}
                  className="breadcrumbs__link"
                >
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserHeaderAuth />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <ReviewForm id={film.id} backgroundColor={film.backgroundColor} />
    </section>
  );
}

export default AddReview;
