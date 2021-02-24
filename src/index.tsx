import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Router from './main/router/router';
import GlobalStyles from 'presentation/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
