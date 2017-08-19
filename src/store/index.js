import { combineReducers } from 'redux';
import uiReducer from './reducers/ui';

const defaultApp = combineReducers({
  uiReducer
});

export default defaultApp;
