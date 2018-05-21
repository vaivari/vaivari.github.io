// @flow

import React from 'react';
import { withRouter } from 'react-router';

import Layout from 'src/components/layout';
import Hero from 'src/components/hero';
import WorkList from 'src/components/work-list';

export const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <hr />
      <WorkList />
    </Layout>
  );
};

export default withRouter(MainPage);
