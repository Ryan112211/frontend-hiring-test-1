export const TURING_LOGIN = "TURING_LOGIN";
export const TURING_LOGIN_SUCCESS = "TURING_LOGIN_SUCCESS";
export const TURING_LOGIN_FAILURE = "TURING_LOGIN_FAILURE";
export default {
  [TURING_LOGIN]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    user: {
      ...state.user,
      username: payload.data.username,
      password: payload.data.password,
    },
  }),
  [TURING_LOGIN_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error,
    },
  }),
  [TURING_LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    provider: payload.data,
    token: payload.data.access_token,
  }),
};
