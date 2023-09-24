import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserInfo from '../../components/user-info/user-info';
import { filmsMock } from '../../mock/films';

function MyList(): JSX.Element {
  const favoriteFilms = filmsMock;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <UserInfo />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmCardsList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
