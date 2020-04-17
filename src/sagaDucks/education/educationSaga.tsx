import { put, takeLatest, call } from 'redux-saga/effects';
import rsf from '../rsf';

import { types as educationTypes } from './education';

function* educationWillFetch() {
  try {
    const education = yield call(rsf.database.read, 'education');
    console.log(education, 333434)
    yield put({ type: educationTypes.EDUCATION_SUCCESS, education });
  } catch (e) {
    // console.log(e);
  }
}

const educationSaga = [
  takeLatest(educationTypes.EDUCATION_REQUEST, educationWillFetch),
];

export default educationSaga;