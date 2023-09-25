import Catatog from '../../components/catalog/catalog';
import FilmCardMain from '../../components/film-card-main/film-card-main';
import FilterGenre from '../../components/filter-genre/filter-genre';
import { ALL_GENRES } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/films-data-selectors';
import { getActiveGenre } from '../../store/genres-process/genres-process.selectors';
import { TFilm } from '../../types/film';

type TMainProps = {
  film: TFilm;
};

function Main({ film }: TMainProps): JSX.Element {
  const films = useAppSelector(getFilms);
  const activeGenre = useAppSelector(getActiveGenre);
  const genres = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

  const filmsByGenre =
    activeGenre === ALL_GENRES
      ? films
      : films.filter((film) => film.genre === activeGenre);

  console.log(activeGenre, genres);

  return (
    <>
      <FilmCardMain film={film} />
      <div className="page-content">
        <section className="catalog">
          <FilterGenre genres={genres} activeGenre={activeGenre} />
          <Catatog films={filmsByGenre} />
        </section>
      </div>
    </>
  );
}

export default Main;
