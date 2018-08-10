import React from 'react';
import { Redirect } from 'react-router-dom';

import Layout from 'src/components/layout';
import GoBack from 'src/components/go-back';
import Footer from 'src/components/footer';

import Relay42 from 'src/articles/relay-42';
import CustomerJourney from 'src/articles/customer-journey';

const PAGES = {
  'relay-42': Relay42,
  'customer-journey': CustomerJourney
};

export const ArticlePage = ({ match, ...props }) => {
  const Handler = PAGES[match.params.articleId];

  if (!Handler) {
    console.warn(`Page ${match.params.articleId} not found.`);
    return <Redirect to="/404" />;
  }

  return (
    <Layout forArticle>
      <GoBack to="/" />
      <Handler {...props} />
      <Footer />
    </Layout>
  );
};

export default ArticlePage;
