export const Types = {
  ADD_REQUEST: 'repositories/ADD_REQUEST',
  ADD_SUCCESS: 'repositories/ADD_SUCCESS',
  ADD_FAILURE: 'repositories/ADD_FAILURE',
};

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export default function repositories(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.repository],
        loading: false,
      };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
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
};
