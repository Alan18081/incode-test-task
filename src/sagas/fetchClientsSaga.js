import {call,take,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_CLIENTS
} from '../actions/types';
import {
  fetchClientsSuccess,
  fetchClientsFailed,
  getActiveClient
} from '../actions';

export function* fetchClientsSaga() {
  yield take(FETCH_CLIENTS);
  try {
    const {data} = yield call(
      axios.get,
      'https://api.myjson.com/bins/13e3jm');
    yield put(fetchClientsSuccess(data));
    yield put(getActiveClient(data[0].general.avatar));
  }
  catch(err) {
    console.log(err);
    yield put(fetchClientsFailed());
  }
}