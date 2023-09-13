import FilmCardFull from '../../components/film-card-full/film-card-full';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import { TFilm } from '../../types/film';

type TFilmProps = {
  film: TFilm;
};
function Film({ film }: TFilmProps): JSX.Element {
  return (
    <>
      <FilmCardFull film={film} />
      <MoreLikeThis />
    </>
  );
}

export default Film;
