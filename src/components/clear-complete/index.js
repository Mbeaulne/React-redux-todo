import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './style.css';

export default ({ disable, clearComplete }) => (
  <Button
    onClick={ () => clearComplete() }
    disabled={disable}
    bsStyle="primary">
    Clear complete
  </Button>
);
