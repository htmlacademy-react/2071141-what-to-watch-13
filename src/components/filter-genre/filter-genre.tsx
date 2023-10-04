import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { TFilms } from '../../types/films';
import {
  resetFilmsAction,
  setGenreAction,
} from '../../store/main-process/main-process.slice';

type TFilterGenreProps = {
  genres: TFilms['genre'][];
  activeGenre: TFilms['genre'];
};
function FilterGenre({ genres, activeGenre }: TFilterGenreProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            key={genre}
            className={classNames('catalog__genres-item', {
              'catalog__genres-item--active': activeGenre === genre,
            })}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => {
                dispatch(resetFilmsAction());
                dispatch(setGenreAction(genre));
              }}
            >
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FilterGenre;
