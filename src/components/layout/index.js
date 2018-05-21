import * as React from 'react'
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default ({ children }) => (
  <div className={styles.root}>
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Link className={styles.title} to="/">vaiva rivas</Link>
        <Link className={styles.about} to="/about">About</Link>
      </div>
    </nav>

    <div className={styles.content}>
      {children}
    </div>
  </div>
);
