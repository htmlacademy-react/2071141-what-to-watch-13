import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmMock } from './mock/film';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App film={filmMock} />
    </Provider>
  </React.StrictMode>
);
