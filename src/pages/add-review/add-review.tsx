import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserInfo from '../../components/user-info/user-info';
import { AppRoute } from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/films-data/films-data-selectors';

function AddReview(): JSX.Element {
  const { name, backgroundImage, posterImage } = useAppSelector(getFilm);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">
                  {name}
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
            src={posterImage}
            alt="The Grand Budapest Hotel poster"
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
