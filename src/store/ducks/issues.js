export const Types = {
  LOAD_REQUEST: 'issues/LOAD_REQUEST',
  LOAD_SUCCESS: 'issues/LOAD_SUCCESS',
  LOAD_FAILURE: 'issues/LOAD_FAILURE',
};

const initialState = {
  data: [],
  error: null,
  loading: false,
  selected: '',
};

export default function issues(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true, selected: action.payload.filter };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.issues,
        error: null,
        loading: false,
      };
    case Types.LOAD_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  loadIssuesRequest: (repository, filter) => ({
    type: Types.LOAD_REQUEST,
    payload: {
      repository,
      filter,
    },
  }),

  loadIssuesSuccess: issues => ({
    type: Types.LOAD_SUCCESS,
    payload: {
      issues,
    },
  }),

  loadIssuesFailure: error => ({
    type: Types.LOAD_FAILURE,
    payload: {
      error,
    },
  }),
};
