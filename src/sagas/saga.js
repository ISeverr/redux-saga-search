import { takeEvery, call, put, takeLatest } from '@redux-saga/core/effects';
import { SET_INPUT_TEXT } from '../constants/actionConstants';
import { setInputText } from '../actions/serachAction';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export function* SearchInputWatcher(SET_INPUT_TEXT) {
    yield call(delay, 2000)
    yield put({type:SET_INPUT_TEXT})
    yield console.log('done')
};

export default function* rootSaga() {
   yield takeLatest(SET_INPUT_TEXT, SearchInputWatcher);
}
