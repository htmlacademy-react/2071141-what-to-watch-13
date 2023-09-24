import { TFilms } from '../../types/films';
import FilmCardsList from '../film-cards-list/film-cards-list';
import Footer from '../footer/footer';

type TMoreLikeThisProps = {
  films: TFilms[];
};
function MoreLikeThis({ films }: TMoreLikeThisProps) {
  return (
    <div className="page-content">
      <FilmCardsList films={films} />
      <Footer />
    </div>
  );
}

export default MoreLikeThis;
