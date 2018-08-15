// @flow

import React from 'react';

import styles from './styles.module.scss';

export default ({ img, alt, small }) => (
  <div className={styles['new-image-wrapper']}>
    <img src={img} alt={alt} />
    <small>{small}</small>
  </div>
);
