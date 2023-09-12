import FilmCardFull from '../../components/film-card-full/film-card-full';
import MoreLikeThis from '../../components/more-like-this/more-like-this';

function Film(): JSX.Element {
  return (
    <>
      <FilmCardFull />
      <MoreLikeThis />
    </>
  );
}

export default Film;
