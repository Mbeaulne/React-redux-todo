import React from 'react';
import styles from './style.css';

import ClearComplete from '../clear-complete';
import DisplayMenu from '../display-menu';

export default ({
  clearComplete,
  disable,
  display,
  todos
}) => (
  <div className={styles.footer}>
    <div className={styles.displayMenu}>
      <DisplayMenu display={display} />
    </div>
    <div className={styles.clearCompleteBtn}>
      <ClearComplete
        todos={todos}
        clearComplete={clearComplete}
        disable={disable} />
    </div>
  </div>
);
