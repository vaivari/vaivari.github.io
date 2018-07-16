// @flow

import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'src/components/layout';

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>404</title>
      </Helmet>

      <p>Page not found</p>
    </Layout>
  );
};
