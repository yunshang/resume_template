import { put, takeLatest } from 'redux-saga/effects';
import data from '../../resume.json';

import { types as aboutTypes } from './about';

function* aboutWillFetch() {
  try {
    const about = data.about
    // const about = yield call(rsf.database.read, 'about');
    yield put({ type: aboutTypes.ABOUT_SUCCESS, about });
  } catch (e) {
    console.log(e);
  }
}

const aboutSaga = [
  takeLatest(aboutTypes.ABOUT_REQUEST, aboutWillFetch),
];

export default aboutSaga;