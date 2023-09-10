import FilmCardSmall from '../film-card-small/film-card-small';

type TFilmCardListProps = {
  filmsCount: number;
};
function FilmCardList({ filmsCount }: TFilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {Array.from({ length: filmsCount }).map((_, index) => (
        <FilmCardSmall key={index} />
      ))}
    </div>
  );
}

export default FilmCardList;
