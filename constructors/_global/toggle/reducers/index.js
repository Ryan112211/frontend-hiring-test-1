export const TOGGLE_CLOSE = 'TOGGLE_CLOSE'
export const TOGGLE_OPEN = 'TOGGLE_OPEN'

export default {
  [TOGGLE_CLOSE]: (state, { payload }) => ({
    ...state,
    open: false,
    name: '',
    button: payload?.button,
  }),
  [TOGGLE_OPEN]: (state, { payload }) => ({
    ...state,
    open: true,
    name: payload?.name,
    button: payload?.button,
  }),
}
