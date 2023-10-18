import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import {
  resetFilmsAction,
  resetGenreAction,
} from '../../store/main-process/main-process.slice';

function Logo() {
  const dispatch = useAppDispatch();

  return (
    <div className="logo">
      <Link
        to={AppRoute.Root}
        className="logo__link"
        onClick={() => {
          dispatch(resetFilmsAction());
          dispatch(resetGenreAction());
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
export default Logo;
