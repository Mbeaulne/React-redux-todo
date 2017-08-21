import { createAction } from 'redux-act';
import R from 'ramda';

export const setDisplay = createAction('SET_DISPLAY');
export const setTodo = createAction('ADD_TODO');
export const overrideTodoWithNewState = createAction('OVERRIDE_TODOS_WITH_NEW_STATE');
export const toggleDisplayMenu = createAction('TOGGLE_DISPLAY_MENU');

const isComplete = x => x.display === 'complete';
const updateDisplay = payload => todo => todo.id === payload ? {
  ...todo,
  display: todo.display === 'complete' ? 'active' : 'complete'
} : todo;

export const toggleComplete = completeTodo => (
  dispatch => {
    const newTodos = R.map(
      updateDisplay(completeTodo),
      JSON.parse(localStorage.getItem('todos'))
    );
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return dispatch(overrideTodoWithNewState(newTodos));
  }
);

export const clearComplete = todos => (
  dispatch => {
    const newTodos = R.reject(isComplete, todos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return dispatch(overrideTodoWithNewState(newTodos));
  }
);

export const addTodo = todo => (
  dispatch => {
    const newTodos =  [
      ...JSON.parse(localStorage.getItem('todos')) || '',
      {
        id: todo.id,
        label: todo.label,
        display: 'active'
      }
    ];
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return dispatch(setTodo(todo));
  }
);
