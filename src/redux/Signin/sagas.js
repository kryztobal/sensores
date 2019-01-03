import actions from './actions';
import { history } from '../store';
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { API_URL } from '../../settings/server_url';

//import Notification from '../../components/Notification';
// import { clearUser, getUser } from '../../helpers/utility';

const login = (data) =>
  fetch(`${API_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 
      'content-type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json())
    .catch( error => ({ error }) )

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(action) {
    console.log(action.payload)
    const response = yield call(login, action.payload)
    console.log(response)
    if(response.status === "success" ){
      yield put()
    } 
    else {
      Notification('error', `Error al iniciar sesión. ${Response.message}`)
    }
  })
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*({ token, user }) {
    yield localStorage.setItem('user', JSON.stringify({ token, user }))
  })
}

// export function* logout() {
//   yield takeEvery(actions.LOGOUT, function*() {
//     yield clearUser();
//     yield put(push('/'))
//   })
// }

// export function* checkAutorization() {
//   yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
//     const user = JSON.parse( getUser().get('user') );
//     if (user) {
//       yield put({
//         type: actions.LOGIN_SUCCESS,
//         accessToken: user.accessToken, 
//         profile: user.profile
//       })

//       yield history.push('/profile')
//     }
//   })
// }

export default function* rootSaga() {
  yield all([
    //fork(logout),
    fork(loginRequest),
    //fork(loginSuccess),
    //fork(checkAutorization),
  ])
}

