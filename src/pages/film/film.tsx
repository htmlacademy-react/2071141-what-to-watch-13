import Catatog from '../../components/catalog/catalog';
import FilmCardFull from '../../components/film-card-full/film-card-full';

type TFilm = {
  filmsCount: number;
};
function Film({ filmsCount }: TFilm): JSX.Element {
  return (
    <>
      <FilmCardFull />
      <Catatog filmsCount={filmsCount} />
    </>
  );
}

export default Film;
