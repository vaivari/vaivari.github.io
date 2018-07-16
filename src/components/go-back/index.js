// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default ({ to }) => (
  <div className={styles.root}>
    <Link to={to}>←</Link>
  </div>
);
