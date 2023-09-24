import Catatog from '../../components/catalog/catalog';
import FilmCardMain from '../../components/film-card-main/film-card-main';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/films-data-selectors';
import { TFilm } from '../../types/film';

type TMainProps = {
  film: TFilm;
};

function Main({ film }: TMainProps): JSX.Element {
  const films = useAppSelector(getFilms);

  return (
    <>
      <FilmCardMain film={film} />
      <Catatog films={films} />
    </>
  );
}

export default Main;
