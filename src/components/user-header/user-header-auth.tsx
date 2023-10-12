import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/user-process.selectors';
import { logoutAction } from '../../store/api-actions';

function UserHeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  return (
    <ul className="user-block">
      <Link to={AppRoute.MyList} className="user-block__item">
        <div className="user-block__avatar">
          <img src={user?.avatarUrl} alt={user?.name} width={63} height={63} />
        </div>
      </Link>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to={AppRoute.Login}
          onClick={(e) => {
            e.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <a className="user-block__link">Sign out</a>
        </Link>
      </li>
    </ul>
  );
}

export default UserHeaderAuth;
