import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ disable, clearComplete, todos }) => (
  <Button
    onClick={ () => clearComplete(todos) }
    disabled={disable}
    bsStyle="primary">
    Clear complete
  </Button>
);
