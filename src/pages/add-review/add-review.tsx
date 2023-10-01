import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserInfo from '../../components/user-info/user-info';
import { AppRoute } from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm } from '../../store/films-data/films-data-selectors';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';

function AddReview(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">
                  {film?.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserInfo />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film?.posterImage}
            alt={film?.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
}

export default AddReview;
