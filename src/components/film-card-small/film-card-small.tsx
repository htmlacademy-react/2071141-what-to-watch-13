import { Link } from 'react-router-dom';
import { TFilms } from '../../types/films';
import FilmCardVideoPlayer from '../film-card-video-player/film-card-video-player';

type TFilmCardSmaillProps = {
  film: TFilms;
  onCardHover: () => void;
  onCardLeave: () => void;
  isActive: boolean;
};

function FilmCardSmall({
  film,
  onCardHover,
  onCardLeave,
  isActive,
}: TFilmCardSmaillProps): JSX.Element {
  const { id, name, previewImage, previewVideoLink } = film;

  const handleMouseEnter = () => {
    onCardHover();
  };
  const handleMouseLeave = () => {
    onCardLeave();
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`films/${id}`} className="small-film-card__link">
        {/* Почему дублируется адрес...???? */}
        <div className="small-film-card__image">
          <FilmCardVideoPlayer
            previewImage={previewImage}
            previewVideoLink={previewVideoLink}
            isActive={isActive}
          />
        </div>
        <h3 className="small-film-card__title">{name}</h3>
      </Link>
    </article>
  );
}

export default FilmCardSmall;
