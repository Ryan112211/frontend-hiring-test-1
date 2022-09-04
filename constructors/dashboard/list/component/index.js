import React, { useEffect } from "react";
import LayoutMain from "@layouts/Main";
import { useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
import PropTypes from "prop-types";
import getcurrentindex from "@_lib/helperFunctions/numberingHelper";
import Content from "./Content";
import Action from "./Action";
import { dashboardList } from "../ducks/actions";
import Status from "./Status";

const columns = (props) => [
  {
    headerName: "No",
    field: "#",
    render(_, __, index) {
      const { page = 1 } = Router.query;
      const categoryIndex = getcurrentindex(
        page,
        props?.data?.dashboardQuery?.limit,
        index
      );
      return categoryIndex;
    },
  },

  {
    headerName: "CALL TYPE",
    field: "call_type",
    tableBodyCellProps: {
      style: {
        cursor: "context-menu",
        textDecoration: "underline",
        fontWeight: 700,
        color: "#810BCF",
      },
    },
  },
  {
    headerName: "Direction",
    field: "direction",
    tableBodyCellProps: {
      style: {
        cursor: "context-menu",
        textDecoration: "underline",
        fontWeight: 700,
        color: "rgb(62, 182, 80)",
      },
    },
  },
  {
    headerName: "Duration",
    field: "duration",
    tableBodyCellProps: {
      style: {
        cursor: "context-menu",
        textDecoration: "underline",
        fontWeight: 700,
        color: "#ff8c66",
      },
    },
  },
  {
    headerName: "From",
    field: "from",
    tableBodyCellProps: {
      style: {
        cursor: "context-menu",
        textDecoration: "underline",
        fontWeight: 700,
        color: "#6A707E",
      },
    },
  },
  {
    headerName: "To",
    field: "to",
    tableBodyCellProps: {
      style: {
        cursor: "context-menu",
        textDecoration: "underline",
        fontWeight: 700,
        color: "#6A707E",
      },
    },
  },
  {
    headerName: "Via",
    field: "via",
    tableBodyCellProps: {
      style: {
        cursor: "context-menu",
        textDecoration: "underline",
        fontWeight: 700,
        color: "#6A707E",
      },
    },
  },
  {
    headerName: "Status",
    field: "status",
    render(_, row) {
      return <Status {...props} row={row} />;
    },
  },

  {
    headerName: "Action",
    field: "tools",
    render(_, row) {
      return <Action {...props} row={row} />;
    },
  },
];

function Component(props) {
  const { handler } = props;
  const history = useRouter();
  const { page = 1, status = "" } = history?.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardList(page, ""));
  }, [dispatch, page, ""]);

  return (
    <LayoutMain>
      <Content
        {...props}
        columns={columns(props)}
        page={+page}
        handlePageChange={handler.handlePageChange}
      />
    </LayoutMain>
  );
}
Component.propTypes = {
  handler: PropTypes.shape({
    handlePageChange: PropTypes.func,
  }).isRequired,
};
export default Component;
