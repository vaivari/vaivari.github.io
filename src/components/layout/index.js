import * as React from 'react'

import styles from './styles.module.scss';

export default ({ forArticle, children }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
);
