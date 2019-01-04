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
      yield setToken(response.token);
      yield setUser(response.user);
      window.location.href = "/";
    } else {
      Notification("error", `Error al iniciar sesión. ${response.message}`);
    }
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    yield removeUser();
    yield removeToken();
    window.location.href = "/login";
  });
}

export default function* rootSaga() {
  yield all([fork(logout), fork(loginRequest)]);
}
