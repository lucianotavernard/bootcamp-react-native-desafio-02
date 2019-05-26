import { all, takeLatest } from 'redux-saga/effects';

import { addRepository } from './repositories';
import { Types as RepositoriesTypes } from '~/store/ducks/repositories';

export default function* rootSaga() {
  yield all([takeLatest(RepositoriesTypes.ADD_REQUEST, addRepository)]);
}
