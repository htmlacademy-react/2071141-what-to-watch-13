import { TFilms } from '../../types/films';
import FilmCardsList from '../film-cards-list/film-cards-list';
import Footer from '../footer/footer';

type TCatalogProps = {
  films: TFilms[];
};
function Catatog({ films }: TCatalogProps): JSX.Element {
  return (
    <>
      <FilmCardsList films={films} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Catatog;
