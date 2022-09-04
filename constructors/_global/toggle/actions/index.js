import {
  TOGGLE_CLOSE,
  TOGGLE_OPEN,
} from '../reducers'

export function toggleClose(name, button = false) {
  return {
    type: TOGGLE_CLOSE,
    payload: { name, button },
  }
}
export function toggleOpen(name, button = false) {
  return {
    type: TOGGLE_OPEN,
    payload: { name, button },
  }
}
