import { of } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap } from "rxjs/operators";

import api from "@_lib/api";

import { snackbarOpen } from "@_global/snackbar/actions";
import {
  dashboardListNextFailure,
  dashboardListSuccess,
  dashboardNoteAddSuccess,
} from "./actions";

import {
  TURING_NODE_CHANGE_LIMIT,
  TURING_NODE_LIST,
  TURING_NODE_LIST_NEXT_FAILURE,
  TURING_NOTE_ADD,
  TURING_NOTE_ADD_SUCCESS,
} from "./reducers";
import { dispatch } from "rxjs/internal/observable/pairs";

export function dashboardListEpic(action$, state$) {
  return action$.pipe(
    ofType(TURING_NODE_LIST, TURING_NODE_CHANGE_LIMIT, TURING_NOTE_ADD_SUCCESS),
    map(() => ({
      method: "get",
      path: { url: "TURING_CALLS" },
      query: {
        ...state$?.value?.dashboard?.data?.dashboardQuery,

        offset: state$?.value?.dashboard?.data?.dashboardQuery.offset || 0,
        limit: state$?.value?.dashboard?.data?.dashboardQuery?.limit || 10,
      },
    })),
    mergeMap((options) =>
      api.turing.apiObs(options).pipe(
        map(({ data }) => dashboardListSuccess(data)),
        catchError((error) =>
          of(dashboardListNextFailure(error.data ? error.data : error))
        )
      )
    ),
    catchError((error) =>
      of(dashboardListNextFailure(error.data ? error.data : error))
    )
  );
}
export function dashboardNoteAdd(action$, state$) {
  return action$.pipe(
    ofType(TURING_NOTE_ADD),
    map(() => {
      const { data } = state$?.value?.dashboard;

      return data;
    }),
    map((data) => ({
      data: {
        content: data.noteContent,
      },
      method: "post",
      path: {
        url: "TURING_CALLS_ADD_NOTE",
        params: { id: data?.selectedId },
      },
    })),
    mergeMap((options) =>
      api.turing.apiObs(options).pipe(
        map(() => dashboardNoteAddSuccess()),
        catchError((error) =>
          of(dashboardListNextFailure(error.data ? error.data : error))
        )
      )
    ),
    catchError((error) =>
      of(dashboardListNextFailure(error.data ? error.data : error))
    )
  );
}
export function noteAddSuccessEpic(action$) {
  return action$.pipe(
    ofType(TURING_NOTE_ADD_SUCCESS),
    map(() => snackbarOpen("info", "Note added successfully"))
  );
}
export function noteAddErrorEpic(action$, state$) {
  return action$.pipe(
    ofType(TURING_NODE_LIST_NEXT_FAILURE),
    map(() =>
      snackbarOpen("error", state$?.value?.dashboardList?.error?.message)
    )
  );
}
