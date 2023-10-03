import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <div>Loading...</div>;
  }
  //play, tabs, showMore, rewievs
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Film} element={<Film />} />
          <Route
            path={AppRoute.Login}
            element={<Login authorizationStatus={authorizationStatus} />}
          />
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
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player} element={<Player />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
