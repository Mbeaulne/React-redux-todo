import React from 'react';
import uuid from 'uuid/v1';
import { withState, withHandlers, compose } from 'recompose'
import { Glyphicon } from 'react-bootstrap';

import styles from './style.css';

const AddTodo = ({onSubmit, todo, updateTodo}) => (
  <div className={styles.wrapper}>
    <div className={styles.submit} onClick={() => onSubmit(todo)}>
      <Glyphicon glyph="plus" />
    </div>
    <input
      value={todo}
      className={styles.input}
      onChange={e => updateTodo(e.target.value)} />
  </div>
);

export default compose(
  withState('todo', 'setTodo', ''),
  withHandlers({
    updateTodo: ({ setTodo }) => x => setTodo(x),
    onSubmit: ({onAddTodo, setTodo }) => todo => {
      todo ? onAddTodo({ 'label': todo, 'id': uuid() }) : '';
      setTodo('');
    }
  })
)(AddTodo);
