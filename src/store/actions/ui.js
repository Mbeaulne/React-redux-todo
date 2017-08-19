import { createAction } from 'redux-act';

export const setDisplay = createAction('SET_DISPLAY');
export const addTodo = createAction('ADD_TODO');
export const clearComplete = createAction('CLEAR_COMPLETE');
export const toggleDisplayMenu = createAction('TOGGLE_DISPLAY_MENU');
export const toggleComplete = createAction('TOGGLE_COMPLETE');

// const getUserData = (data) => {
//
// };
