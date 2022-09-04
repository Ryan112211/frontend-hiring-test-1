import { TURING_LOGIN_SUCCESS, TURING_LOGIN } from "../reducers";

export function turingLogin(data) {
  return {
    type: TURING_LOGIN,
    payload: { data },
  };
}
export function turingLoginSuccess(data) {
  return {
    type: TURING_LOGIN_SUCCESS,
    payload: { data },
  };
}
export function turingLoginFailure(error) {
  return {
    type: TURING_LOGIN_SUCCESS,
    payload: { error },
  };
}
