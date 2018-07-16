import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import ScrollTop from './components/scroll-top';
import configureStore from './reducks/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollTop>
        <App />
      </ScrollTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
