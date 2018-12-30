import { combineReducers } from 'redux';
import Signin from './Signin/reducers';
import Data from './Data/reducers';
import { reducer as form } from 'redux-form';

export default combineReducers({
  Signin,
  Data,
  form
})