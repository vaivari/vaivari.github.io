// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.root}>
    <ul className={styles.list}>
      <li>
        <Link to="/work/relay-42" className={styles['hvr-forward']}>
          <h2>Created Design System for the Relay42 platform</h2>
          <p>Relay42</p>
        </Link>
      </li>
      <li>
        <Link to="/work/customer-journey" className={styles['hvr-forward']}>
          <h2>Redesigned Customer Journey module</h2>
          <p>Relay42</p>
        </Link>
      </li>
      <li>
        <a
          className={styles['hvr-forward']}
          href="https://projects.invisionapp.com/boards/2J1WJFU4UYSZ8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Palabras: personal dictionary for language students</h2>
          <p>Personal Project</p>
        </a>
      </li>
    </ul>
  </div>
);
