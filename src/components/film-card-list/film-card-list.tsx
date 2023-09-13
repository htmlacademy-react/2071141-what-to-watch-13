import { TFilms } from '../../types/films';
import FilmCardSmall from '../film-card-small/film-card-small';

type TFilmCardListProps = {
  films: TFilms[];
};
function FilmCardList({ films }: TFilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall film={film} key={film.id} />
      ))}
    </div>
  );
}

export default FilmCardList;
