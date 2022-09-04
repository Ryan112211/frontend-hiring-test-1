import { combineReducers } from "redux";

import auth from "@_global/auth";
import me from "@_global/me";
import snackbar from "@_global/snackbar";
import toggle from "@_global/toggle";

import home from "constructors/home/ducks";
import dashboard from "@constructors/dashboard/list/ducks";

const appReducers = combineReducers({
  auth,
  me,
  snackbar,
  toggle,
  home,
  dashboard,
});

const rootReducers = (state, action) => {
  if (action.type === "AUTH_SIGNOUT") {
    /* eslint-disable no-param-reassign */
    state = undefined;
    /* eslint-enable no-param-reassign */
  }

  return appReducers(state, action);
};

export default rootReducers;
