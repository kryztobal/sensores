import actions from './actions';
// import { history } from '../store';
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { API_URL } from '../../settings/server_url';
import Notification from '../../components/Notification'

const getDevicesList = (user) =>
	fetch(`${API_URL}/devices`, {
		method: 'GET',
		headers: {
			user: `${user}`,
			'Access-Control-Allow-Headers': '*'
		}
	})
		.then((response) => response.json())
		.catch((error) => ({ error }));

export function* getDevicesListRequest() {
	yield takeEvery(actions.GET_DEVICE_LIST, function*(action) {
		const user = 'crojo';
    const response = yield call(getDevicesList, user);
		if(response.status === "success" ){
      yield put({ type: actions.GET_DEVICE_LIST_SUCCESS, payload:response.data })
		} 
		else {
		  Notification('error', `Error al cargar la data.`)
		}
	});
}


export default function* rootSaga() {
	yield all([
	  fork(getDevicesListRequest),
	])
}
  