import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './app.css';

import MainPage from './pages/main';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';

const App = () => {
  return (
    <Fragment>
      <Helmet titleTemplate="%s - Vaiva Rivas" defaultTitle="Vaiva Rivas" />

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />

        {/* Catch all unmatched routes */}
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
};

export default withRouter(App);
