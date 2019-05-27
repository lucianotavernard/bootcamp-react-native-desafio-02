import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as IssuesActions } from '~/store/ducks/issues';

export function* loadIssues(action) {
  try {
    const { repository, filter } = action.payload;

    const url = filter
      ? `repos/${repository}/issues?state=${filter}`
      : `repos/${repository}/issues`;

    const { data: issues } = yield call(api.get, url);

    const repositoryData = issues.map(issue => ({
      id: issue.id,
      title: issue.title,
      url: issue.html_url,
      owner: {
        avatar_url: issue.user.avatar_url,
        username: issue.user.login,
      },
    }));

    yield put(IssuesActions.loadIssuesSuccess(repositoryData));
  } catch (error) {
    yield put(IssuesActions.loadIssuesFailure('Ocorreu algum erro inesperado!'));
  }
}
