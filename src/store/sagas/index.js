import { all, takeLatest } from 'redux-saga/effects';

import { addRepository } from './repositories';
import { Types as RepositoriesTypes } from '~/store/ducks/repositories';

import { loadIssues } from './issues';
import { Types as IssuesTypes } from '~/store/ducks/issues';

export default function* rootSaga() {
  yield all([
    takeLatest(RepositoriesTypes.ADD_REQUEST, addRepository),
    takeLatest(IssuesTypes.LOAD_REQUEST, loadIssues),
  ]);
}
