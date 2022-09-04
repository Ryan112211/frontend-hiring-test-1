import reducer from "@_utils/reducer";

import reducers from "./reducers";

const INITIAL_STATE = {
  error: {},
  isError: false,
  isLoading: false,
  user: {
    username: "",
    password: "",
  },
  provider: {},
};

export default reducer(Object.assign(reducers), INITIAL_STATE);
