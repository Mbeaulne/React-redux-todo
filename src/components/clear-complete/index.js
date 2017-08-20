import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ disable, clearComplete }) => (
  <Button
    onClick={ () => clearComplete() }
    disabled={disable}
    bsStyle="primary">
    Clear complete
  </Button>
);
