import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

import { Alert, Footer, Header } from "@components/index";

const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    background: "#fff",
  },
  drawerOpen: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hoverDrawerOpen: {
    marginLeft: theme.spacing(9),
  },
  drawerClose: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: theme.spacing(9),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },
}));

function Component(props) {
  const { snackbar, toggle, handler, children } = props;
  const classes = styles();

  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header {...props} />
      <div
        style={{
          flex: "1 0 auto",
          paddingTop: "64px",
          paddingBottom: "60px",
        }}
      >
        {/* <Breadcrumbs {...props} /> */}
        {children}
      </div>
      <Footer />
      <Alert
        duration={3000}
        message={snackbar.message}
        open={snackbar.open}
        variant={snackbar.variant}
        onClose={handler.snackbarClose}
        showCloseButton
      />
    </main>
  );
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  snackbar: PropTypes.shape({
    message: PropTypes.string,
    open: PropTypes.bool,
    variant: PropTypes.string,
  }).isRequired,
  toggle: PropTypes.shape({
    open: PropTypes.bool,
    button: PropTypes.bool,
  }).isRequired,
  handler: PropTypes.shape({
    snackbarClose: PropTypes.func,
  }).isRequired,
};

export default Component;
