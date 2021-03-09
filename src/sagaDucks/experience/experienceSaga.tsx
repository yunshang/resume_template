import { put, takeLatest } from 'redux-saga/effects';
import data from '../../resume.json';

import { types as experienceTypes } from './experience';

function* experienceWillFetch() {
  try {
    // const experience = yield call(rsf.database.read, 'experience');
    const experience = data.experience
    yield put({ type: experienceTypes.EXPERIENCE_SUCCESS, experience });
  } catch (e) {
    // console.log(e);
  }
}

const experienceSaga = [
  takeLatest(experienceTypes.EXPERIENCE_REQUEST, experienceWillFetch),
];

export default experienceSaga;