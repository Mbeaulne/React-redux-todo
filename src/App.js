import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Button } from 'react-bootstrap';
import R from 'ramda';

import AddTodo from './components/add-todo';
import DisplayMenu from './components/display-menu';
import TodoList from './components/todo-list';

import {
  addTodo,
  clearComplete,
  toggleComplete
} from './store/actions/ui.js';

import styles from  './App.css';

const isDisplayed = display => x => R.or(
    x.display === display,
    display === 'all'
);

const displayByFilter = (todos, display) => R.filter(isDisplayed(display), todos);
const getCompleteCount = R.none(x => x.display === 'complete')

const App = ({
    todos,
    display,
    onAddTodo,
    onClearComplete,
    onToggleComplete
  }) => <div className="App">
  <div className={styles.todoWrapper}>
    <AddTodo onAddTodo={onAddTodo} />
    <TodoList toggleComplete={onToggleComplete} todos={displayByFilter(todos, display)}/>
    <DisplayMenu display={display} />
    <Button
      onClick={ () => onClearComplete() }
      disabled={getCompleteCount(todos)}
      bsStyle="primary">
      Clear complete
    </Button>
  </div>
</div>;

const mapStateToProps = ({ uiReducer }) => ({
  todos: uiReducer.todos,
  display: uiReducer.display
});

export default compose(
  connect(mapStateToProps, {
    onAddTodo: addTodo,
    onClearComplete: clearComplete,
    onToggleComplete: toggleComplete
  })
)(App);
