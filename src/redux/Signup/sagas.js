import actions from "./actions";
import { history } from "../store";
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { API_URL } from "../../settings/server_url";
import axios from "axios";
import Notification from '../../components/Notification'

const signup = data =>
  fetch(`${API_URL}/users/create`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => response.json())
    .catch(error => ({ error }));

export function* signupRequest() {
  yield takeEvery(actions.SIGNUP_REQUEST, function*(action) {
    console.log("sig", action);
 if (action.payload.password != action.payload["confirm_password"]) {
      yield put({ type: actions.SIGNUP_ERROR });
      Notification('error', `Las contraseñas no coinciden`)
    } else {

      const response = yield call(signup, { details: action.payload });
      console.log("response", response);
      
      // if (Response.status === "success") {
      //   yield put({
      //     type: actions.SIGNUP_SUCCESS,
      //     payload: Response
      //   });
      // } else {
      //   yield put({ type: actions.SIGNUP_ERROR });
      //   Notification(
      //     "error",
      //     `Ha ocurrido un error al registrarlo. ${Response.message} ${
      //       Response.data.code == "REQ_PARAM"
      //         ? nameFieldSignup[Response.data.meta.param]
      //         : Response.data.code == "INV_PARAM"
      //         ? nameFieldSignup[Response.data.meta.param]
      //         : ""
      //     }`
      //   );
      // }
    }
  });
}

export function* signupSuccess() {
  yield takeEvery(actions.SIGNUP_SUCCESS, function*({ payload }) {
    //const { data } = payload
    //const { details } = data
    // yield put({
    //   type: "LOGIN_SUCCESS",
    //   accessToken: data.jwtToken,
    //   profile: {
    //     email: details.email,
    //     avatar: details.profileImage,
    //     fullName: `${details.firstName} ${details.lastName}`
    //   }
    // })
    //yield put(history.push('/login'))
    //yield Notification('info','Registro exitoso.')
  });
}

export default function* rootSaga() {
  yield all([fork(signupRequest), fork(signupSuccess)]);
}
