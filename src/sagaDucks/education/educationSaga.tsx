import { put, takeLatest } from 'redux-saga/effects';
import data from '../../resume.json';

import { types as educationTypes } from './education';

function* educationWillFetch() {
  try {
    // const education = yield call(rsf.database.read, 'education');
    const education = data.education
    yield put({ type: educationTypes.EDUCATION_SUCCESS, education });
  } catch (e) {
    // console.log(e);
  }
}

const educationSaga = [
  takeLatest(educationTypes.EDUCATION_REQUEST, educationWillFetch),
];

export default educationSaga;