import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as RepositoriesActions } from '~/store/ducks/repositories';

export function* addRepository(action) {
  try {
    const { repository } = action.payload;
    const { data } = yield call(api.get, `repos/${repository}`);

    const repositoryData = {
      id: data.id,
      name: data.name,
      fullName: data.full_name,
      username: data.owner.login,
      avatar_url: data.owner.avatar_url,
    };

    yield put(RepositoriesActions.addRepositorySuccess(repositoryData));
  } catch (error) {
    yield put(RepositoriesActions.addRepositoryFailure('Ocorreu algum erro inesperado!'));
  }
}
