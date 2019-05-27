export const Types = {
  ADD_REQUEST: 'repositories/ADD_REQUEST',
  ADD_SUCCESS: 'repositories/ADD_SUCCESS',
  ADD_FAILURE: 'repositories/ADD_FAILURE',
  LOAD_REPOSITORIES_REQUEST: 'repositories/LOAD_REPOSITORIES_REQUEST',
  LOAD_REPOSITORIES_SUCCESS: 'repositories/LOAD_REPOSITORIES_SUCCESS',
  LOAD_REPOSITORIES_FAILURE: 'repositories/LOAD_REPOSITORIES_FAILURE',
};

const initialState = {
  data: [],
  error: null,
  loading: false,
  refreshing: false,
};

export default function repositories(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.repository],
        error: null,
        loading: false,
      };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    case Types.LOAD_REPOSITORIES_REQUEST:
      return { ...state, refreshing: true };
    case Types.LOAD_REPOSITORIES_SUCCESS:
      return {
        ...state,
        data: action.payload.repositoryList,
        error: null,
        refreshing: false,
      };
    case Types.LOAD_REPOSITORIES_FAILURE:
      return { ...state, error: action.payload.error, refreshing: false };
    default:
      return state;
  }
}

export const Creators = {
  addRepositoryRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: {
      repository,
    },
  }),

  addRepositorySuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: {
      repository,
    },
  }),

  addRepositoryFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: {
      error,
    },
  }),

  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REPOSITORIES_REQUEST,
  }),

  loadRepositoriesSuccess: repositoryList => ({
    type: Types.LOAD_REPOSITORIES_SUCCESS,
    payload: {
      repositoryList,
    },
  }),

  loadRepositoriesFailure: error => ({
    type: Types.LOAD_REPOSITORIES_FAILURE,
    payload: {
      error,
    },
  }),
};
