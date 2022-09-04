import {
  ME_EMPLOYEE,
  ME_PROVIDERS,
  ME_USER,
} from '../reducers'

export function meEmployee(data) {
  return {
    type: ME_EMPLOYEE,
    payload: { data },
  }
}

export function meProviders(data) {
  return {
    type: ME_PROVIDERS,
    payload: { data },
  }
}
export function meUser(data) {
  return {
    type: ME_USER,
    payload: { data },
  }
}
