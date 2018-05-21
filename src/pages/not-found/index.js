// @flow

import React from 'react';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>

      <p>Page not found</p>
    </div>
  );
};
