import reducer from "@_utils/reducer";

import reducers from "./reducers";

const INITIAL_STATE = {
  data: {
    dashboardQuery: {
      limit: 10,
      offset: 0,
    },
    categoryL1: "",
    categoryL2: "",
    categoryL3: "",

    categoryL3payload: {
      name: "",
      isActive: true,
      categoryL1: "",
      categoryL2: "",
      categoryL3: "",
      order: 1,
    },
    categoryL1Data: [],
    items: [],
  },
  error: {
    message: "",
  },
  categoryqueryL2: {
    count: 0,
    keyword: "",
    limit: 10,
    offset: 0,
    orderBy: "",
    sort: "",
  },
  categoryqueryL3: {
    count: 0,
    keyword: "",
    limit: 10,
    offset: 0,
    orderBy: "",
    sort: "",
    condition: "level:3",
  },
  page: {
    current: 0,
    max: 0,
  },
  principalQuery: {
    count: 0,
    keyword: "",
    limit: 10,
    offset: 0,
    orderBy: "createdAt",
    sort: "",
  },
  isError: false,
  isLoading: true,
  actionId: null,
  isSuccess: false,
  actionPayload: {},
  fileUrl: "",
  errMessage: "",
  successMessage: "",
  isUploading: false,
};

export default reducer(Object.assign(reducers), INITIAL_STATE);
