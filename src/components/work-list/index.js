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
    </ul>
  </div>
);
