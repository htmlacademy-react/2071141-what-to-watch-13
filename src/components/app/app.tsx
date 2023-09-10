import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Film} element={<Film />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.MyList} element={<MyList />} />
          <Route path={AppRoute.AddReview} element={<AddReview />} />
          <Route path={AppRoute.Player} element={<Player />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
