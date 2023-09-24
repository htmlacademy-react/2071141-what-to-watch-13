import FilmCardFull from '../../components/film-card-full/film-card-full';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import { filmsMock } from '../../mock/films';
import { TFilm } from '../../types/film';

type TFilmProps = {
  film: TFilm;
};
function Film({ film }: TFilmProps): JSX.Element {
  const similarFilms = filmsMock.slice(0, 3);

  return (
    <>
      <FilmCardFull film={film} />
      <MoreLikeThis films={similarFilms} />
    </>
  );
}

export default Film;
