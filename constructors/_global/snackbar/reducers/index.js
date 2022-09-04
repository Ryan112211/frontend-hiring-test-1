export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE'
export const SNACKBAR_OPEN = 'SNACKBAR_OPEN'

export default {
  [SNACKBAR_CLOSE]: (state) => ({
    ...state,
    open: false,
    message: '',
  }),
  [SNACKBAR_OPEN]: (state, { payload }) => ({
    ...state,
    open: true,
    message: payload.message,
    variant: payload.variant,
  }),
}
