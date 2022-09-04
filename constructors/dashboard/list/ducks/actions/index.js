import {
  TURING_NODE_LIST,
  TURING_NODE_LIST_SUCCESS,
  TURING_NODE_LIST_NEXT_FAILURE,
  TURING_NODE_LIST_NEXT_SUCCESS,
  TURING_NODE_CHANGE_LIMIT,
  TURING_NOTE_ADD_UPDATE,
  TURING_NOTE_ADD,
  TURING_NOTE_ADD_SUCCESS,
} from "../reducers";

export function dashboardList(page = 1, status = "") {
  return {
    type: TURING_NODE_LIST,
    payload: { page, status },
  };
}

export function dashboardListSuccess(data) {
  return {
    type: TURING_NODE_LIST_SUCCESS,
    payload: { data },
  };
}

export function dashboardListNextSuccess(data) {
  return {
    type: TURING_NODE_LIST_NEXT_SUCCESS,
    payload: { data },
  };
}
export function dashboardListNextFailure(error) {
  return {
    type: TURING_NODE_LIST_NEXT_FAILURE,
    payload: { error },
  };
}
export function dashboardNoteAddUpdate(content = "", id = "") {
  return {
    type: TURING_NOTE_ADD_UPDATE,
    payload: { content, id },
  };
}
export function changeLimit(limit, page) {
  return {
    type: TURING_NODE_CHANGE_LIMIT,
    payload: { limit, page },
  };
}
export function dashboardNoteAddSuccess() {
  return {
    type: TURING_NOTE_ADD_SUCCESS,
  };
}

export function dashboardNoteAdd() {
  return {
    type: TURING_NOTE_ADD,
  };
}
