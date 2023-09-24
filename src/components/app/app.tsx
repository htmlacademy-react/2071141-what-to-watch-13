import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import { TFilm } from '../../types/film';

type TAppProps = {
  film: TFilm;
};

function App({ film }: TAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Main film={film} />} />
          <Route path={AppRoute.Film} element={<Film film={film} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <AddReview film={film} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player} element={<Player />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
