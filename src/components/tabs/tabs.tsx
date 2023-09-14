import { Fragment } from 'react';
import { TFilm } from '../../types/film';
import { getTimeFromMins } from '../../utils/utils';

type TTabsProps = {
  film: TFilm;
};

function Tabs({ film }: TTabsProps): JSX.Element {
  const { director, starring, runTime, genre, released } = film;
  return (
    // todo - сделать табы
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
  );
}

export default Tabs;
