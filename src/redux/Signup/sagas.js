import actions from "./actions";
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { API_URL } from "../../settings/server_url";
import Notification from '../../components/Notification'
import URLSearchParams from "url-search-params";

const formatData = payload => {
  const searchParams = new URLSearchParams();
  for (const prop in payload) {
    searchParams.set(prop, payload[prop]);
  }
  return searchParams;
};

const signup = data =>
  fetch(`${API_URL}/users/create`, {
    method: "PUT",
    body: formatData(data),
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => response.json())
    .catch(error => ({ error }));

export function* signupRequest() {
  yield takeEvery(actions.SIGNUP_REQUEST, function*(action) {
 if (action.payload.password != action.payload["confirm_password"]) {
      yield put({ type: actions.SIGNUP_ERROR });
      // Notification('error', `Las contraseñas no coinciden`)
      console.log("no coinciden las contraseñas")
    } else {
      const {email, user, password} = action.payload
      const response = yield call(signup, {email, user, password} );
      
      if (response.status == "success") {
        console.log("Registro exitoso")
        // Notification('info', `Registro existoso`)
        // history.push('/login')
        window.location.href = "/login";
      } else {
        console.log(`Ha habido un error al registrarse ${response.message}`)
        // Notification('error', `Ha habido un error al registrarse ${response.message}`)
      }
    }
  });
}

export default function* rootSaga() {
  yield all([fork(signupRequest)]);
}
