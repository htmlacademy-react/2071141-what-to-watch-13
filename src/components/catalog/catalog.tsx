import { useAppSelector } from '../../hooks';
import { getFilmsCountOnPage } from '../../store/main-process/main-process.selectors';
import { TFilms } from '../../types/films';
import ShowMoreButton from '../buttons/show-more-button/show-more-button';
import FilmCardsList from '../film-cards-list/film-cards-list';
import Footer from '../footer/footer';

type TCatalogProps = {
  films: TFilms[];
};
function Catatog({ films }: TCatalogProps): JSX.Element {
  const maxFilmsCountOnPage = useAppSelector(getFilmsCountOnPage);

  const filmsOnPage = films.slice(
    0,
    Math.min(films.length, maxFilmsCountOnPage)
  );

  const isShowMore = films.length > filmsOnPage.length;

  return (
    <>
      <FilmCardsList films={filmsOnPage} />
      <div className="catalog__more">{isShowMore && <ShowMoreButton />}</div>
      <Footer />
    </>
  );
}

export default Catatog;
