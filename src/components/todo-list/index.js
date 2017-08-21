import React from 'react';
import R from 'ramda';

import Todo from '../todo';

export default ({todos, toggleComplete}) => (
  <div className="App">
    {
      R.map(
        ({ id, label, display }) => (
          <Todo
            label={label}
            display={display}
            id={id}
            toggleComplete={toggleComplete}
            key={id} />
        ),todos
      )
    }
  </div>
);
