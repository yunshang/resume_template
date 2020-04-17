import { put, takeLatest, call } from 'redux-saga/effects';
import rsf from '../rsf';

import { types as aboutTypes } from './about';

function* aboutWillFetch() {
  try {
    const about = yield call(rsf.database.read, 'about');
    console.log(about, "about")
    yield put({ type: aboutTypes.ABOUT_SUCCESS, about });
  } catch (e) {
    console.log(e);
  }
}

const aboutSaga = [
  takeLatest(aboutTypes.ABOUT_REQUEST, aboutWillFetch),
];

export default aboutSaga;