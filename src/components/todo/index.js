import React from 'react';
import styles from './style.css';
import { Glyphicon } from 'react-bootstrap';

export default ({
  label,
  toggleComplete,
  id,
  display
}) => (
  <div className={styles.wrapper} onClick={() => toggleComplete(id) }>
    <div className={styles.todo}>
      <div className={styles.checkmarkWrapper}>
        {display === 'complete' && <Glyphicon glyph="ok"  />}
      </div>
      <div className={styles.labelWrapper}>
        {label}
      </div>
    </div>
  </div>
);
