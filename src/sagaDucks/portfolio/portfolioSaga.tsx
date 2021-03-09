import { put, takeLatest } from 'redux-saga/effects';
import data from '../../resume.json';

import { types as portfolioTypes } from './portfolio';

function* portfolioWillFetch() {
  try {
    // const portfolio = yield call(rsf.database.read, 'portfolio');
    const portfolio = data.portfolio
    yield put({ type: portfolioTypes.PORTFOLIO_SUCCESS, portfolio });
  } catch (e) {
    // console.log(e);
  }
}

const portfolioSaga = [
  takeLatest(portfolioTypes.PORTFOLIO_REQUEST, portfolioWillFetch),
];

export default portfolioSaga;
