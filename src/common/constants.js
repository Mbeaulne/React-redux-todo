import uuid from 'uuid/v1';

export const DEFAULT_TODO_STATE = [
  {
      'id': uuid(),
      'label': 'learn react',
      'display': 'active'
  },
  {
    'id': uuid(),
    'label': 'write the content for the next module',
    'display': 'complete'
  },
  {
    'id': uuid(),
    'label': 'buy cheese',
    'display': 'complete'
  },
  {
    'id': uuid(),
    'label': 'buy milk',
    'display': 'active'
  }
];

export const DEFAULT_UI_STATE = {
  'todos': DEFAULT_TODO_STATE,
  'display': 'all',
  'displayMenu': false
};
