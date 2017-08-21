import uuid from 'uuid/v1';
import reducer from './ui';

import {
  DEFAULT_UI_STATE
} from '../../common/constants.js';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;

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

  it('should override todo state with new state', () => {
    const id = uuid();
    const oldid = uuid();
    expect(
      reducer({todos: [
        {
          'payload': {
            'id': oldid,
            'label': 'old state',
            'display': 'active'
          }
        }
        ]}, {
        'payload': [{
          id,
          'label': 'Our new awesome todo',
          'display': 'active'
        },
        {
          id,
          'label': 'Our new awesome todo two',
          'display': 'active'
        }],
        'type': 'OVERRIDE_TODOS_WITH_NEW_STATE'
      })
    ).toEqual({
      'todos': [{
        id,
        'label': 'Our new awesome todo',
        'display': 'active'
      },
      {
        id,
        'label': 'Our new awesome todo two',
        'display': 'active'
      }]
    });
  });
});
