// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default () => (
  <footer className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h3>Vaiva Rivas — </h3>
        <div>
          <Link to="/about">About me</Link>
        </div>
        <div style={{ marginTop: 10 }}>
          <a
            href="/cv-vaiva_rivas.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className={styles.box}>
        <h3>Email — </h3>
        <span>vaiva.rivas[at]gmail.com</span>
      </div>
      <div className={styles.box}>
        <h3>Social — </h3>
        <span>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/vaiva-rivas-1731382a"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </footer>
);
