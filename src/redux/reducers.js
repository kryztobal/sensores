import { combineReducers } from 'redux';
import Auth from './Auth/reducers';
import { reducer as form } from 'redux-form';

export default combineReducers({
  Auth,
  form
})