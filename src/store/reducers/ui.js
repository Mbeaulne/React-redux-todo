import { createReducer } from 'redux-act';

import {
  DEFAULT_UI_STATE
} from '../../common/constants.js';

import {
  setDisplay,
  setTodo,
  overrideTodoWithNewState,
  toggleDisplayMenu
} from '../actions/ui.js';

const uiReducer = createReducer({
  [toggleDisplayMenu]: state => ({ ...state, displayMenu: !state.displayMenu }),
  [setDisplay]: (state, payload) => ({ ...state, display: payload }),
  [setTodo]: (state, payload) => ({ ...state, todos: [
      ...state.todos,
      {
        id: payload.id,
        label: payload.label,
        display: 'active'
      }
    ]
  }),
  [overrideTodoWithNewState]: (state, payload) => ({ ...state, todos: payload }),
}, DEFAULT_UI_STATE);

export default uiReducer;
