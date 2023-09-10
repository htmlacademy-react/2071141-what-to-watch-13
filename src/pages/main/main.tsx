import Catatog from '../../components/catalog/catalog';
import FilmCardMain from '../../components/film-card-main/film-card-main';

type TMainProps = {
  filmsCount: number;
};
function Main({ filmsCount }: TMainProps): JSX.Element {
  return (
    <>
      <FilmCardMain />
      <Catatog filmsCount={filmsCount} />
    </>
  );
}

export default Main;
