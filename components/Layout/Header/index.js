/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import clsx from "clsx";

import PropTypes from "prop-types";

import { useRouter } from "next/router";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  makeStyles,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "#000",
    background: "#fff",
    borderBottom: "1px solid #DEDEDE",
  },
  appBarShift: {
    width: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    "& > h6": {
      fontWeight: 700,
    },
  },
  logo: {
    width: "50px",
    height: "30px",
    marginRight: theme.spacing(2),
  },
}));

function Component(props) {
  const { isAuthenticated } = props;
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar)} elevation={0}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              variant="h6"
              color="textSecondary"
              style={{ color: "#4D077C", fontSize: 24, fontWeight: 600 }}
            >
              <img alt="logo" src="/logo/turing.png" className={classes.logo} />
              Turing Kind of Call Center Test
            </Typography>
          </div>
          <span style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/assets/Notification.svg"
              alt="Notification"
              style={{
                marginRight: 10,
                borderRight: "1px solid #DEDEDE",
                paddingRight: 16,
              }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              Hi, Rehan
              <br />
              <small
                style={{ fontSize: 14, fontWeight: 400, color: "#666666" }}
              >
                Developer
              </small>
            </span>{" "}
            &nbsp;
            <img
              onClick={handleClick}
              src="/assets/Account.png"
              alt="Account"
              style={{ marginLeft: 16, cursor: "pointer" }}
            />
            <Menu
              id="user-profile-menu"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "user-profile-menu",
              }}
            >
              <MenuItem onClick={() => router.push("/signout")}>
                Logout
              </MenuItem>
            </Menu>
          </span>
        </Toolbar>
      </AppBar>
    </>
  );
}

Component.defaultProps = {
  // plain: false,
};

Component.propTypes = {
  employee: PropTypes.shape({
    fullname: PropTypes.string,
    department: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // plain: PropTypes.bool,
  toggle: PropTypes.shape({
    name: PropTypes.string,
    open: PropTypes.bool,
  }).isRequired,
  handler: PropTypes.shape({
    toggle: PropTypes.shape({
      open: PropTypes.func,
    }),
  }).isRequired,
};

export const Header = Component;

export default Header;
