import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, Switch, Route } from 'react-router-dom';
import withAnalytics, { initAnalytics } from 'react-with-analytics';

import 'normalize.css';
import './app.css';

import MainPage from './pages/main';
import ArticlePage from './pages/article';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';

initAnalytics('UA-124424414-1');

const App = () => {
  return (
    <Fragment>
      <Helmet titleTemplate="%s - Vaiva Rivas" defaultTitle="Vaiva Rivas" />

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work/:articleId" component={ArticlePage} />

        {/* Catch all unmatched routes */}
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
};

export default withRouter(withAnalytics(App));
