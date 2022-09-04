import {
  SNACKBAR_CLOSE,
  SNACKBAR_OPEN,
} from '../reducers'

export function snackbarClose() {
  return {
    type: SNACKBAR_CLOSE,
  }
}
export function snackbarOpen(variant = 'info', message) {
  return {
    type: SNACKBAR_OPEN,
    payload: { variant, message },
  }
}
