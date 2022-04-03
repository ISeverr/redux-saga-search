import { takeEvery, call, put, takeLatest } from '@redux-saga/core/effects';

import { setInputTextAction } from '../actions/serachAction';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

// export function* SearchInputWatcher() {
//     yield delay(2000)
//     yield put(setInputTextAction())
//     yield console.log('done') 
// };

export default function* rootSaga() {
  // yield takeLatest(setInputTextAction, SearchInputWatcher);
}
