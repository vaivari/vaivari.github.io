// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.root}>
    <ul className={styles.list}>
      <li>
        <Link to="/work/relay-42">
          <h2>Created Design System for the Relay42 platform</h2>
          <p>Relay42</p>
        </Link>
      </li>

      <li>
        <h2>A holistic tool for surgeons to evaluate surgical risk and reduce re-admissions</h2>
        <p>Ready Surgery</p>
      </li>
    </ul>
  </div>
);
