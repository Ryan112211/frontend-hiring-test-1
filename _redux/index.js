import "rxjs";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";

import { useMemo } from "react";
import rootEpics from "./root/epics";
import rootReducers from "./root/reducers";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducers(state, action);
};

/** Core Redux Store */
export const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware();
  const logger = createLogger({ collapsed: true });

  const middlewares =
    process.env.NODE_ENV !== "production"
      ? [thunkMiddleware, epicMiddleware, logger]
      : [thunkMiddleware, epicMiddleware];

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  epicMiddleware.run(rootEpics);

  return store;
};

export const wrapper = createWrapper(initStore);

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}
