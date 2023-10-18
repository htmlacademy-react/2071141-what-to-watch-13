import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <div className="user-page">
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__message">
            <p>Error 404 page not found</p>
            <Link to={AppRoute.Root}>Back to the homepage</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
