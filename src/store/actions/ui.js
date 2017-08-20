import { createAction } from 'redux-act';
import R from 'ramda'

export const setDisplay = createAction('SET_DISPLAY');
export const setTodo = createAction('ADD_TODO');
export const resetTodosFromLS = createAction('RESET_TODOS_FROM_LOCALSTORAGE');
export const toggleDisplayMenu = createAction('TOGGLE_DISPLAY_MENU');
export const toggleComplete = createAction('TOGGLE_COMPLETE');

const isComplete = x => x.display === 'complete';

export const clearComplete = todos => (
  dispatch => {
    const newTodos = R.reject(isComplete, todos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return dispatch(resetTodosFromLS(newTodos));
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
