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
			'Access-Control-Allow-Headers': '*',
			'token':'e178bec211fe4851e7913d8a1b367baf06a9758183241c2c3b56438a8b37c1ef82c30ff49dc44523ad8fbb19acf4eb0d218cae6bba8a96697237d64800ebb7ab'
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
  