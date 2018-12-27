import actions from './actions';
import { history } from '../store';
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { API_URL } from '../../settings/server_url';
import axios from 'axios'

const signup = (data) =>
    axios({
        method:'post',
        url:`${API_URL}/users/create`,
        headers:{ 
            'content-type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache',
            'Postman-Token': 'da77954a-6563-450e-b458-51c37956a00b'
        },
        data:JSON.stringify(data)
    })
    .then( response => response.json() )
    .catch( error => ({ error }) )

export function* signupRequest() {
  yield takeEvery(actions.SIGNUP_REQUEST, function*(action) {
    
    // if(action.payload.password.length < 6){
    //   yield put({ type: actions.SIGNUP_ERROR })
    //   //Notification('error', `Ha ocurrido un error al registrarlo. La contraseña debe tener al menos 6 caracteres`)
    // }
    // else if(action.payload.password != action.payload['repeat-password']){
    //   yield put({ type: actions.SIGNUP_ERROR })
    //   //Notification('error', `Las contraseñas no coinciden`)
    // }
    // else {
    console.log("debuger", action.payload)
      const response = yield call(signup, { details: action.payload })
      console.log("debug signup",response)
    //   if( Response.status === "success" ) {
    //     yield put({
    //       type: actions.SIGNUP_SUCCESS,
    //       payload: Response
    //     })
    //   } else {
    //     yield put({ type: actions.SIGNUP_ERROR })
    //     Notification('error', `Ha ocurrido un error al registrarlo. ${ Response.message } ${Response.data.code == 'REQ_PARAM' ? nameFieldSignup[Response.data.meta.param] : Response.data.code == 'INV_PARAM' ? nameFieldSignup[Response.data.meta.param]:''}`)
    //   }
    // }
  })
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
  })
}

export default function* rootSaga() {
  yield all([
    fork(signupRequest),
    fork(signupSuccess)
  ])
}






