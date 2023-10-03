import { TFilm } from '../../../types/film';
import { TFilms } from '../../../types/films';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useEffect, useState } from 'react';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import {
  changeMyListAction,
  fetchMyListAction,
} from '../../../store/api-actions';
import { TMyList } from '../../../types/my-list';

type TMyListButtonProps = {
  id: TFilm['id'];
  isActive: TFilm['isFavorite'];
  myList: TFilms[];
};

function MyListButton({
  id,
  isActive,
  myList,
}: TMyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [isFavorite, setIsFavorite] = useState<boolean>(isActive);

  // useEffect(() => {
  //   if (authorizationStatus === AuthorizationStatus.Auth) {
  //     dispatch(fetchMyListAction());
  //   }
  // }, [dispatch, authorizationStatus]);

  const handleMyListClick = () => () => {
    const changedFavoriteStatus = Number(!isFavorite) as TMyList['status'];
    setIsFavorite(!isFavorite);
    dispatch(changeMyListAction({ id, status: changedFavoriteStatus }));
  };

  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width={19} height={20}>
        {isFavorite ? (
          <use xlinkHref="#in-list" onClick={handleMyListClick} />
        ) : (
          <use xlinkHref="#add" />
        )}
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myList.length}</span>
    </button>
  );
}

export default MyListButton;
