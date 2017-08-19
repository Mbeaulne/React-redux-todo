import { createReducer } from 'redux-act';
import R from 'ramda';

import {
  DEFAULT_UI_STATE
} from '../../common/constants.js';

import {
  setDisplay,
  addTodo,
  clearComplete,
  toggleDisplayMenu,
  toggleComplete
} from '../actions/ui.js';

const isComplete = x => x.display === 'complete';
const updateDisplay = payload => todo => todo.id === payload ? {
  ...todo,
  display: todo.display === 'complete' ? 'active' : 'complete'
} : todo;

const uiReducer = createReducer({
  [toggleDisplayMenu]: state => ({ ...state, displayMenu: !state.displayMenu }),
  [setDisplay]: (state, payload) => ({ ...state, display: payload }),
  [addTodo]: (state, payload) => ({ ...state, todos: [
      ...state.todos,
      {
        id: payload.id,
        label: payload.label,
        display: 'active'
      }
    ]
  }),
  [clearComplete]: state => ({ ...state, todos: R.reject(isComplete, state.todos) }),
  [toggleComplete]: (state, payload) => ({ ...state, todos: R.map(updateDisplay(payload), state.todos) }),
}, DEFAULT_UI_STATE);

export default uiReducer;
