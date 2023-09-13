import { TFilms } from '../../types/films';
import FilmCardSmall from '../film-card-small/film-card-small';

type TFilmCardsListProps = {
  films: TFilms[];
};
function FilmCardsList({ films }: TFilmCardsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall film={film} key={film.id} />
      ))}
    </div>
  );
}

export default FilmCardsList;
