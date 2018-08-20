// @flow

import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';

import Layout from 'src/components/layout';
import Footer from 'src/components/footer';
import GoBack from 'src/components/go-back';

import styles from './styles.module.scss';

export const MainPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <GoBack to="/" />
      <section className={styles.root}>
        <div className={styles.holaContainer}>
          <img src="/assets/hola.jpg" alt="hola, im vaiva" />
        </div>
        <h2>
          <div>Hi, I’m Vaiva Rivas.</div>
          I'm a UX designer and a volunteer based in Amsterdam.
        </h2>
        <p>
          I’m a self-taught UX designer with Public Relations and IT Support
          experience. I believe my background gives me good insights into people
          behaviours, goals and needs hence I create positive experiences for
          them.
        </p>
        <p>
          As a co-organiser of Ladies that UX Amsterdam meetups and other
          initiatives, I truly believe that diverse teams build more ethical and
          better suited products for different kinds of people.
        </p>
        <p>
          In my spare time, I enjoy cooking not too healthy food, swimming in
          the pool and visiting pretty towns with my husband in and around the
          Netherlands.
        </p>
        <hr />
        <p>
          <a
            href="https://www.meetup.com/Ladies-that-UX-Amsterdam"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ladies that UX Amsterdam
          </a>{' '}
          advocates for diversity and promotes women talent by giving them a
          platform for public speaking and support each other in various stages
          of their careers. The community is inclusive to all background,
          gender, age, race, and expertise.
        </p>
      </section>

      <Footer />
    </Layout>
  );
};

export default withRouter(MainPage);
