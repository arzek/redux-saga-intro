import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import getData from './service';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions



function* fetchData(action) {
  try {
    const res = yield call(getData);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: res.data });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("GET_DATA", fetchData);
}

export default mySaga;