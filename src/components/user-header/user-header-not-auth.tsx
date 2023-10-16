import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function UserHeaderNotAuth(): JSX.Element {
  return (
    <ul className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">
        <li className="user-block__item">
          <a className="user-block__link">Sign in</a>
        </li>
      </Link>
    </ul>
  );
}

export default UserHeaderNotAuth;
