import { put, takeLatest } from 'redux-saga/effects';
import data from '../../resume.json';

import { types as technologyTypes } from './technology';

function* technologyWillFetch() {
  try {
    // const technology = yield call(rsf.database.read, 'skills');
    const technology = data.skills
    yield put({ type: technologyTypes.TECHNOLOGY_SUCCESS, technology });
  } catch (e) {
    // console.log(e);
  }
}

const technologySaga = [
  takeLatest(technologyTypes.TECHNOLOGY_REQUEST, technologyWillFetch),
];

export default technologySaga;
