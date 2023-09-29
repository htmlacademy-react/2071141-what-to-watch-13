import { Link } from 'react-router-dom';
import Header from '../header/header';
import { AppRoute } from '../../const';
import { filmMock } from '../../mock/film';

function FilmCardMain(): JSX.Element {
  const promoFilm = filmMock;
  const { name, posterImage, backgroundImage, genre, released, isFavorite } =
    promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <Link
                to={AppRoute.Player}
                className="btn btn--play film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <Link
                to={AppRoute.MyList}
                className="btn btn--list film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  {isFavorite ? (
                    <use xlinkHref="#in-list" />
                  ) : (
                    <use xlinkHref="#add" />
                  )}
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardMain;
