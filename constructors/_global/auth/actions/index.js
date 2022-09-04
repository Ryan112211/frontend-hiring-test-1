import {
  AUTH_AUTHENTICATED,
  AUTH_SIGNIN,
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNIN_FAILURE,
  AUTH_SIGNIN_DATA,
  AUTH_SIGNOUT,
} from '../reducers'

export function authAuthenticated(data) {
  return {
    type: AUTH_AUTHENTICATED,
    payload: { data },
  }
}

export function authSignin() {
  return {
    type: AUTH_SIGNIN,
  }
}
export function authSigninFailure(error) {
  return {
    type: AUTH_SIGNIN_FAILURE,
    payload: { error },
  }
}
export function authSigninSuccess(data) {
  return {
    type: AUTH_SIGNIN_SUCCESS,
    payload: { data },
  }
}
export function authSigninData(meta, data) {
  return {
    type: AUTH_SIGNIN_DATA,
    payload: { meta, data },
  }
}

export function authSignout() {
  return {
    type: AUTH_SIGNOUT,
  }
}
