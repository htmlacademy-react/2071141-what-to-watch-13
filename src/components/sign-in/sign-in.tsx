import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function SignIn(): JSX.Element {
  return (
    <ul className="user-block">
      <Link to={AppRoute.Login} className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
        </div>
      </Link>
      <li className="user-block__item">
        <a className="user-block__link">Sign in</a>
      </li>
    </ul>
  );
}

export default SignIn;
