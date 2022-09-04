export const AUTH_AUTHENTICATED = 'AUTH_AUTHENTICATED'

export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'
export const AUTH_SIGNIN_DATA = 'AUTH_SIGNIN_DATA'

export const AUTH_SIGNOUT = 'AUTH_SIGNOUT'

export default {
  [AUTH_AUTHENTICATED]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    isAuthenticated: payload.data,
  }),

  [AUTH_SIGNIN]: (state) => ({
    ...state,
    signin: {
      ...state.signin,
      isLoading: true,
    },
  }),
  [AUTH_SIGNIN_FAILURE]: (state, { payload }) => ({
    ...state,
    signin: {
      ...state.signin,
      error: {
        message: payload.error.message,
      },
      isLoading: false,
    },
  }),
  [AUTH_SIGNIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    signin: {
      ...state.signin,
      data: payload.data,
      isLoading: false,
    },
  }),
  [AUTH_SIGNIN_DATA]: (state, { payload }) => ({
    ...state,
    signin: {
      ...state.signin,
      user: {
        ...state.signin.user,
        [payload.meta]: payload.data,
      },
    },
  }),

  [AUTH_SIGNOUT]: (state) => ({
    ...state,
    isAuthenticated: false,
  }),
}
