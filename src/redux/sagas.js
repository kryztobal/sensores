import { all } from 'redux-saga/effects';

import Signin from './Signin/sagas';
import Data from './Data/sagas';
import Signup from './Signup/sagas'

export default function* rootSaga() {
  yield all([
    Signin(),
    Signup(),
    Data()
  ])
}