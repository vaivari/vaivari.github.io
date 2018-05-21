// @flow

import React from 'react';
import { withRouter } from 'react-router';

import Layout from 'src/components/layout';
import styles from './styles.module.scss';

export const MainPage = () => {
  return (
    <Layout>
      <section className={styles.root}>
        <h2>Hello, I’m Vaiva. I am a UX designer and a volunteer based in Amsterdam.</h2>
        <p>I learned about communication and information during my Public Relations studies and observed closely how people use technologies while working as a IT support analyst.</p>
        <p>I enjoyed solving user problems and found myself advising PO and devs how to improve our in-house applications because I genuinely wanted to improve users’ experiences. When I read about UX design as a job role for the first time, I realised that this is my path and that my past experiences will help me to design great products for users.</p>
        <p>After one year of self-teaching and moving from London to Amsterdam I found an internship and then a job as a UX designer. Finally, I’m doing what I love.</p>
        <p>In order to make my learning and networking faster I joined Ladies that UX Amsterdam community as a member, but very soon I got involved more and more in the community life and became one of the co-organisers.</p>
        <p>I truly believe that when we have diversity in tech, those diverse teams will build products that cater for different needs and provide positive experiences for everyone.</p>
        <p>When I’m not making a difference in tech, I enjoy cooking not too healthy food, swimming in the pool and visiting pretty towns with my husband in and around the Netherlands.</p>
        <hr />
        <p>
          <a href="https://www.meetup.com/Ladies-that-UX-Amsterdam" target="_blank">Ladies that UX Amsterdam</a> advocates for diversity and promotes female talent by giving women a platform for public speaking and support each other in various stages of their careers. Our community is inclusive to all background, gender, age, race, and expertise.
        </p>

        <div className={styles.contact}>
          <p><i className="fa fa-paper-plane" /> Contact</p>
          <div className={styles.details}>
            <a href="mailto:vaiva.rivas@gmail.com">vaiva.rivas@gmail.com</a>
            <span>/</span>
            <a href="https://nl.linkedin.com/in/vaiva-rivas-1731382a" target="_blank">Linkedin</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default withRouter(MainPage);
