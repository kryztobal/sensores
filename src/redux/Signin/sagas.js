import actions from "./actions";
import history from "../../history";
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { API_URL } from "../../settings/server_url";
import {
  setToken,
  setUser,
  getToken,
  getUser,
  removeUser,
  removeToken
} from "../../settings/utils";
import Notification from "../../components/Notification";
import URLSearchParams from "url-search-params";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const formatData = payload => {
  const searchParams = new URLSearchParams();
  for (const prop in payload) {
    searchParams.set(prop, payload[prop]);
  }
  return searchParams;
};

const login = data =>
  fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: formatData(data),
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => response.json())
    .catch(error => ({ error }));

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(action) {
    const response = yield call(login, action.payload);
    if (response.status === "success") {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: response.token,
        user: response.user
      });
    } else {
      yield put({
        type: actions.LOGIN_ERROR,
        error: `Error al iniciar sesión. ${response.message}`
      });
    }
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    yield removeUser();
    yield removeToken();
    yield history.push('/login')
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(action) {
    yield setToken(action.token);
    yield setUser(action.user);
    yield history.push('/')
  });
}

export function* authCheck() {
  yield takeEvery(actions.AUTH_CHECK, function*() {
    const user = getUser()
    const token = getToken()
    if(user){
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: token,
        user: user
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(logout), fork(loginSuccess), fork(loginRequest), fork(authCheck)]);
}
