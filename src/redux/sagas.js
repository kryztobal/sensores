import { all } from 'redux-saga/effects';

import Auth from './Auth/sagas';
//import Data from './Data/saga';
import Signup from './Signup/sagas'

export default function* rootSaga() {
  yield all([
    Auth(),
    Signup()
    //Data()
  ])
}