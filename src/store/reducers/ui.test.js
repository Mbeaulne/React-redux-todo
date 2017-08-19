import uuid from 'uuid/v1';

import reducer from './ui';
import {
  setDisplay,
  addTodo,
  clearComplete,
  toggleDisplayMenu,
  toggleComplete
} from '../actions/ui';

import {
  DEFAULT_UI_STATE
} from '../../common/constants.js';


describe('ui Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(DEFAULT_UI_STATE);
  });

  it('should toggle the display menu open', () => {
    expect(
      reducer({}, {
        'payload': undefined,
        'type': 'TOGGLE_DISPLAY_MENU'
      })
    ).toEqual({'displayMenu': true});
  });

  it('should toggle the display menu open when the state has already been set', () => {
    expect(
      reducer({'displayMenu': false}, {
        'payload': undefined,
        'type': 'TOGGLE_DISPLAY_MENU'
      })
    ).toEqual({'displayMenu': true});
  });

  it('should toggle the display menu closed', () => {
    expect(
      reducer({'displayMenu': true}, {
        'payload': undefined,
        'type': 'TOGGLE_DISPLAY_MENU'
      })
    ).toEqual({'displayMenu': false});
  });

  it('should switch the activity state from all to active', () => {
    expect(
      reducer({'display': 'all'}, {
        'payload': 'active',
        'type': 'SET_DISPLAY'
      })
    ).toEqual({'display': 'active'});
  });

  it('should switch the activity state from all to complete', () => {
    expect(
      reducer({'display': 'all'}, {
        'payload': 'complete',
        'type': 'SET_DISPLAY'
      })
    ).toEqual({'display': 'complete'});
  });

  it('should switch the activity state from complete to all', () => {
    expect(
      reducer({'display': 'complete'}, {
        'payload': 'all',
        'type': 'SET_DISPLAY'
      })
    ).toEqual({'display': 'all'});
  });

  it('should switch the activity state from active to all', () => {
    expect(
      reducer({'display': 'active'}, {
        'payload': 'all',
        'type': 'SET_DISPLAY'
      })
    ).toEqual({'display': 'all'});
  });

  it('should add a todo to the current list of todos', () => {
    const id = uuid();
    expect(
      reducer({todos: []}, {
        'payload': {
          'id': id,
          'label': 'Our new awesome todo'
        },
        'type': 'ADD_TODO'
      })
    ).toEqual({
      'todos': [{
          id,
          'label': 'Our new awesome todo',
          'display': 'active'
        }]
    });
  });

  it('should clear any completed ', () => {
    const todos = [
      {
        'id': 1,
        'label': 'write the content for the next module',
        'display': 'complete'
      },
      {
        'id': 2,
        'label': 'buy cheese',
        'display': 'complete'
      },
      {
        'id':3,
        'label': 'buy milk',
        'display': 'active'
      }
    ]
    expect(
      reducer({todos}, {
        'payload': 'all',
        'type': 'CLEAR_COMPLETE'
      })
    ).toEqual({
      todos: [{
        'id':3,
        'label': 'buy milk',
        'display': 'active'
      }]
    });
  });

  it('should toggle state of a todo from active to complete', () => {
    const todos = [
      {
        'id': 1,
        'label': 'write the content for the next module',
        'display': 'complete'
      },
      {
        'id': 2,
        'label': 'buy cheese',
        'display': 'complete'
      },
      {
        'id':3,
        'label': 'buy milk',
        'display': 'active'
      }
    ];

    expect(
      reducer({todos}, {
        'payload': todos[2].id,
        'type': 'TOGGLE_COMPLETE'
      })
    ).toEqual({
      todos: [
        {
          'id': 1,
          'label': 'write the content for the next module',
          'display': 'complete'
        },
        {
          'id': 2,
          'label': 'buy cheese',
          'display': 'complete'
        },
        {
          'id':3,
          'label': 'buy milk',
          'display': 'complete'
        }
      ]
    });
  });


  it('should toggle state of a todo from complete to active', () => {
    const todos = [
      {
        'id': 1,
        'label': 'write the content for the next module',
        'display': 'complete'
      },
      {
        'id': 2,
        'label': 'buy cheese',
        'display': 'complete'
      },
      {
        'id':3,
        'label': 'buy milk',
        'display': 'active'
      }
    ];

    expect(
      reducer({todos}, {
        'payload': todos[1].id,
        'type': 'TOGGLE_COMPLETE'
      })
    ).toEqual({
      todos: [
        {
          'id': 1,
          'label': 'write the content for the next module',
          'display': 'complete'
        },
        {
          'id': 2,
          'label': 'buy cheese',
          'display': 'active'
        },
        {
          'id':3,
          'label': 'buy milk',
          'display': 'active'
        }
      ]
    });
  });

});
