import FilmCardFull from '../../components/film-card-full/film-card-full';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import { TFilm } from '../../types/film';
import { TFilms } from '../../types/films';

type TFilmProps = {
  film: TFilm;
  films: TFilms[];
};
function Film({ film, films }: TFilmProps): JSX.Element {
  return (
    <>
      <FilmCardFull film={film} />
      <MoreLikeThis films={films} />
    </>
  );
}

export default Film;
