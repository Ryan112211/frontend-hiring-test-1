/* eslint-disable react/destrucTURING-assignment */
export const TURING_NODE_LIST = "TURING_NODE_LIST";
export const TURING_NODE_LIST_STATUS = "TURING_NODE_LIST_STATUS";
export const TURING_NODE_LIST_SUCCESS = "TURING_NODE_LIST_SUCCESS";

export const TURING_NODE_LIST_NEXT = "TURING_NODE_LIST_NEXT";
export const TURING_NODE_LIST_NEXT_NO_FETCH = "TURING_NODE_LIST_NEXT_NO_FETCH";
export const TURING_NODE_LIST_NEXT_SUCCESS = "TURING_NODE_LIST_NEXT_SUCCESS";
export const TURING_NODE_LIST_NEXT_FAILURE = "TURING_NODE_LIST_NEXT_FAILURE";

export const TURING_NODE_LIST_DELETE = "TURING_NODE_LIST_DELETE";

export const TURING_NODE_CHANGE_LIMIT = "TURING_NODE_CHANGE_LIMIT";

export const TURING_NOTE_ADD_SUCCESS = "TURING_NOTE_ADD_SUCCESS";

export const TURING_NOTE_ADD = "TURING_NOTE_ADD";
export const TURING_NOTE_ADD_UPDATE = "TURING_NOTE_ADD_UPDATE";

export default {
  [TURING_NODE_LIST]: (state, { payload }) => ({
    ...state,
    isLoading: true,

    data: {
      ...state.data,
      dashboardQuery: {
        ...state?.data?.dashboardQuery,
        limit: parseInt(state?.data?.dashboardQuery?.limit, 10),
        status: payload.status,
        offset:
          parseInt(state?.data?.dashboardQuery?.limit, 10) *
          (payload?.page - 1),
      },
      nodeData: {
        ...state.data.nodeData,
      },
    },
  }),
  [TURING_NODE_CHANGE_LIMIT]: (state, { payload }) => ({
    ...state,

    data: {
      ...state.data,
      dashboardQuery: {
        ...state.data.dashboardQuery.query,
        limit: payload.limit,
        offset: parseInt(payload.limit, 10) * (payload?.page - 1),
      },
    },
  }),
  [TURING_NODE_LIST_NEXT_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.message,
    },
  }),
  [TURING_NOTE_ADD_UPDATE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: {
      ...state.data,
      noteContent: payload.content,
      selectedId: payload.id,
    },
  }),
  [TURING_NOTE_ADD]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [TURING_NOTE_ADD_SUCCESS]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [TURING_NODE_LIST_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: {
      ...state.data,
      nodeData: {
        ...state.data.nodeData,
        ...payload.data,
      },
    },
  }),
};
