import { combineEpics } from "redux-observable";

import router from "next/router";

import * as authEpics from "@_global/auth/observables";
import * as homeEpics from "constructors/home/ducks/observables";
import * as dashboardEpics from "constructors/dashboard/list/ducks/observables";
function rootEpics(...args) {
  const dependencies = {
    router,
  };
  const allEpics = [
    ...Object.values(authEpics),
    ...Object.values(homeEpics),

    ...Object.values(dashboardEpics),
  ];

  return combineEpics(...allEpics)(...args, dependencies);
}

export default rootEpics;
