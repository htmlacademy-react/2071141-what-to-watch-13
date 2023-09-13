import Catatog from '../../components/catalog/catalog';
import FilmCardMain from '../../components/film-card-main/film-card-main';
import { filmMock } from '../../mock/film';
import { TFilms } from '../../types/films';

type TMainProps = {
  films: TFilms[];
};
function Main({ films }: TMainProps): JSX.Element {
  return (
    <>
      <FilmCardMain film={filmMock} />
      <Catatog films={films} />
    </>
  );
}

export default Main;
