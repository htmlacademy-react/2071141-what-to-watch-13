import { Link } from 'react-router-dom';
import { TFilm } from '../../types/film';
import Header from '../header/header';
import { AppRoute } from '../../const';
import { Fragment } from 'react';
import { getTimeFromMins } from '../../utils/utils';

type TFimCardFull = { film: TFilm };
function FilmCardFull({ film }: TFimCardFull): JSX.Element {
  const {
    name,
    posterImage,
    backgroundImage,
    director,
    starring,
    runTime,
    genre,
    released,
    isFavorite,
  } = film;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
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
              <Link to={'review'} className="btn film-card__button">
                Add review
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={name} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Overview
                  </a>
                </li>
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">
                    Details
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>
            <div className="film-card__text film-card__row">
              <div className="film-card__text-col">
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Director</strong>
                  <span className="film-card__details-value">{director}</span>
                </p>
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Starring</strong>
                  <span className="film-card__details-value">
                    {starring.map((actor) => (
                      <Fragment key={actor}>
                        {actor} <br />
                      </Fragment>
                    ))}
                  </span>
                </p>
              </div>
              <div className="film-card__text-col">
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Run Time</strong>
                  <span className="film-card__details-value">
                    {getTimeFromMins(runTime)}
                  </span>
                </p>
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Genre</strong>
                  <span className="film-card__details-value">{genre}</span>
                </p>
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Released</strong>
                  <span className="film-card__details-value">{released}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;
