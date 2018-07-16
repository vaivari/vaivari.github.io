// @flow

import React from 'react';
import { withRouter } from 'react-router';

import Layout from 'src/components/layout';
import Hero from 'src/components/hero';
import Footer from 'src/components/footer';
import WorkList from 'src/components/work-list';

export const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <WorkList />
      <Footer />
    </Layout>
  );
};

export default withRouter(MainPage);
