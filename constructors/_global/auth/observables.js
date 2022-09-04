import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { authSigninFailure, authSigninSuccess } from './actions'
import { AUTH_SIGNIN } from './reducers'

export default function authSigninEpic(action$, state$) {
  return action$.pipe(
    ofType(AUTH_SIGNIN),
    map(() => ({
      email: state$.value.auth.signin.email,
      password: state$.value.auth.signin.password,
    })),
    mergeMap(() => of(authSigninSuccess())),
    catchError(({ data }) => of(authSigninFailure(data))),
  )
}
