import { of } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap } from "rxjs/operators";

import api from "@_lib/api";

import { snackbarOpen } from "@_global/snackbar/actions";
import {
  categoryL3AddFailure,
  turingLoginFailure,
  turingLoginSuccess,
} from "./actions";
import {
  CATEGORY_L3_LIST_NEXT_FAILURE,
  CATEGORYL3_ADD_FAILURE,
  TURING_LOGIN,
  TURING_LOGIN_SUCCESS,
} from "./reducers";
import cookie from "@_utils/cookie";
import router from "next/router";

export function categoryL3Add(action$, state$) {
  return action$.pipe(
    ofType(TURING_LOGIN),
    map(() => {
      const { user } = state$?.value?.home;
      return user;
    }),
    map((data) => ({
      data: {
        ...data,
      },
      method: "post",
      path: {
        url: "TURING_LOGIN",
      },
    })),
    mergeMap((options) =>
      api.turing.apiObs(options).pipe(
        map(({ data }) => turingLoginSuccess(data)),
        catchError((error) =>
          of(turingLoginFailure(error.data ? error.data : error))
        )
      )
    ),
    catchError((error) =>
      of(turingLoginFailure(error.data ? error.data : error))
    )
  );
}

export function setToken(action$, state$) {
  return action$.pipe(
    ofType(TURING_LOGIN_SUCCESS),
    map(() => {
      const { token } = state$?.value?.home;
      cookie.set(null, "token", token);
      return router.reload();
    })
  );
}
