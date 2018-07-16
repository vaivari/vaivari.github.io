// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import Icon from './arrow-back.svg';

export default ({ to }) => (
  <div className={styles.root}>
    <Link to={to}>
      <img src={Icon} alt="go back icon" />
      Return
    </Link>
  </div>
);
