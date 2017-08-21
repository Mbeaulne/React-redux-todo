export const DEFAULT_UI_STATE = {
  'todos': JSON.parse(localStorage.getItem('todos')) || [],
  'display': 'all',
  'displayMenu': false
};
