import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { ContainerFull, ContainerItem } from "@components/index";
import TablePagination from "@components/Pagination";

import RowsPerPage from "@components/Pagination/rowsPerPage";
import { TableNew } from "@components/index";

const styles = makeStyles((theme) => ({
  contentWrapper: {
    paddingBottom: 0,
    "& .MuiTableContainer-root table tr:last-child .actionPopup": {
      top: "unset",
      bottom: "65%",
    },
  },

  PaginationWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    "& >div": {
      width: "fit-content",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      "& >div": {
        marginBottom: theme.spacing(1),
      },
    },
  },
}));

function Component(props) {
  const { columns, data, isLoading, handlePageChange, page } = props;
  const classes = styles();

  const { dashboardQuery } = data;

  return (
    <>
      <ContainerFull>
        <ContainerItem xs={12} className={classes.contentWrapper}>
          <br />
          <TableNew
            columns={columns}
            data={data?.nodeData?.nodes}
            page={page?.current}
            isLoading={isLoading}
            rowsPerPage={30}
          />
          <div className={classes.PaginationWrapper}>
            <RowsPerPage {...props} />
            <TablePagination
              count={Math.ceil(
                +data?.nodeData?.totalCount / +dashboardQuery?.limit
              )}
              page={page}
              onChange={handlePageChange}
            />
          </div>
        </ContainerItem>
      </ContainerFull>
    </>
  );
}

Component.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handler: PropTypes.shape({
    next: PropTypes.func,
    toPage: PropTypes.func,
    removeFilter: PropTypes.func,
    prev: PropTypes.func,
    nextNoFetch: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape()),
    filterExists: PropTypes.bool,
    query: PropTypes.shape({
      limit: PropTypes.number,
      count: PropTypes.number,
      keyword: PropTypes?.string,
    }),
  }).isRequired,
  page: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export const Content = Component;

export default Content;
