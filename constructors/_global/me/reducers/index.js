export const ME_EMPLOYEE = 'ME_EMPLOYEE'
export const ME_PROVIDERS = 'ME_PROVIDERS'
export const ME_USER = 'ME_USER'

export default {
  [ME_EMPLOYEE]: (state, { payload }) => ({
    ...state,
    employee: payload.data,
  }),
  [ME_PROVIDERS]: (state, { payload }) => ({
    ...state,
    providers: payload.data,
  }),
  [ME_USER]: (state, { payload }) => ({
    ...state,
    user: payload.data,
  }),
}
