import React from "react";
import { Chip, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = makeStyles((theme) => ({
  statusStyle: {
    padding: 5,
    color: (data) => data !== "Inactive" && theme.palette.default.light,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: (data) => {
      switch (data) {
        case true:
          return theme.palette.success.main;

        case false:
          return theme.palette.error.main;

        default:
          return theme.palette.secondary.light;
      }
    },
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

function Component({ row }) {
  const { is_archived } = row;
  const classes = styles(is_archived);

  return (
    <Chip
      label={is_archived ? "Archived" : "Not Archived"}
      className={classes.statusStyle}
    />
  );
}

Component.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string,
  }).isRequired,
};

export const Status = Component;

export default Status;
