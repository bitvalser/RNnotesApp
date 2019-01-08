import { combineReducers } from 'redux';
import { authorization } from './authorization';
import { notes } from './notes';

export default combineReducers({
  authorization,
  notes
});
