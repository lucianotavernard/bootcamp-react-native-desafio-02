import { put, call, select } from 'redux-saga/effects';

import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import { Creators as RepositoriesActions } from '~/store/ducks/repositories';

export function* addRepository(action) {
  try {
    const { repository } = action.payload;
    const repositories = yield select(state => state.repositories);
    const repositoryDuplicated = repositories.data.find(repo => repo.fullName === repository);

    if (repositoryDuplicated) {
      yield put(
        RepositoriesActions.addRepositoryFailure('O repositório informado já existe na lista!'),
      );

      return;
    }

    const { data } = yield call(api.get, `repos/${repository}`);

    const repositoryData = {
      id: data.id,
      name: data.name,
      fullName: data.full_name,
      username: data.owner.login,
      avatar_url: data.owner.avatar_url,
    };

    AsyncStorage.setItem(
      '@GitIssues:repositories',
      JSON.stringify([...repositories.data, repositoryData]),
    );

    yield put(RepositoriesActions.addRepositorySuccess(repositoryData));
  } catch (error) {
    console.tron.log(error);
    yield put(RepositoriesActions.addRepositoryFailure('O repositório informado não existe'));
  }
}

export function* loadRepositories() {
  try {
    const repositories = yield AsyncStorage.getItem('@GitIssues:repositories');
    const repositoryData = JSON.parse(repositories) || [];

    yield put(RepositoriesActions.loadRepositoriesSuccess(repositoryData));
  } catch (error) {
    yield put(
      RepositoriesActions.loadRepositoriesFailure(
        'Ocorreu algum erro ao carregar os repositorios!',
      ),
    );
  }
}
