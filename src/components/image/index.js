// @flow

import React from 'react';

import styles from './styles.module.scss';

export default ({ img, alt, small }) => (
  <div className={styles['new-image-wrapper']}>
    <a href={img}>
      <img src={img} alt={alt} />
    </a>
    <small>{small}</small>
  </div>
);
