import React from "react";
import classnames from "classnames";
import { Typography, Button, Box, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

import { ContainerFull, ContainerItem } from "@components";

import { useDispatch } from "react-redux";
import { turingLogin } from "../ducks/actions";

const styles = makeStyles((theme) => ({
  container: {},
  imageContainer: {
    display: "flex",
    flex: 1,
    padding: theme.spacing(3),
    minHeight: "98.7vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 900px)": {
      minHeight: "70vh",
    },
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
    backgroundColor: "#e9edf4",
  },
  SignContainer: {
    padding: 65,
    paddingLeft: 100,
    paddingRight: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "@media screen and (max-width: 600px)": {
      padding: 25,
      paddingLeft: 40,
      paddingRight: 40,
    },
  },
  button: {
    margin: theme.spacing(2),
    width: "100%",
    textTransform: "none",
  },
  center: {
    textAlign: "center",
    background: theme.palette.default.dark,
  },
  company: {
    color: theme.palette.primary.main,
  },
  facebook: {
    backgroundColor: theme.palette.facebook.main,
    "&:hover": {
      backgroundColor: theme.palette.facebook.dark,
    },
  },
  google: {
    background: "white",
    color: "#4285f4",
    border: "1px solid #4285f4",
    "&:hover": {
      backgroundColor: "#4285f4",
      color: "#fff",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "#ea4335",
  },
  logo: {
    margin: "0 auto",
  },
  typography: {
    display: "flex",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  siginText: {
    marginTop: 30,
    marginBottom: 11,
    alignSelf: "flex-start",
  },
  dashboardText: {
    color: theme.palette.primary.main,
    paddingTop: 20,
    fontWeight: 800,
  },
  footerText: {
    paddingTop: 100,
  },
}));
function Component() {
  const classes = styles();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
      <ContainerFull className={classnames(classes.container)}>
        <ContainerItem
          className={classnames(classes.imageContainer)}
          xs={12}
          md={8}
        >
          <Box
            component="img"
            sx={{
              height: 80,
              width: 80,
              maxHeight: { xs: 50, md: 60 },
              maxWidth: { xs: 50, md: 60 },
            }}
            alt="Turing logo"
            src="logo/turing.png"
          />
          <Box
            component="img"
            sx={{
              height: 400,
              width: 400,
              maxHeight: { xs: 250, md: 360 },
              maxWidth: { xs: 250, md: 360 },
            }}
            alt="background"
            src="logo/titleturing.svg"
          />
          <Typography
            className={classes.dashboardText}
            variant="h6"
            display="block"
          >
            Initial Test Portal
          </Typography>
          <Typography
            className={classes.footerText}
            variant="p"
            display="block"
          >
            Created By Rehan Khan
          </Typography>
        </ContainerItem>
        <ContainerItem
          xs={12}
          md={4}
          className={classnames(classes.SignContainer)}
        >
          <div className={classes.typography}>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 60,
                maxHeight: { xs: 50, md: 60 },
                maxWidth: { xs: 50, md: 60 },
              }}
              alt="The house from the offer."
              src="logo/turing.png"
            />
            <Box
              component="h2"
              sx={{
                fontWeight: "bold",
                ml: 3,
              }}
            >
              Turing Technologies
            </Box>
          </div>
          <Typography
            className={classes.siginText}
            variant="h4"
            display="block"
            color="textSecondary"
          >
            Sign in
          </Typography>
          <Typography
            className={classes.siginText}
            variant="p"
            display="block"
            color="textSecondary"
          >
            Please Click to Continue as i dont think i was supposed to add a
            Login Form here
          </Typography>
          <Button
            id="google-signin"
            className={classnames(classes.button, classes.google)}
            color="primary"
            size="normal"
            variant="contained"
            type="submit"
            onClick={() =>
              dispatch(
                turingLogin({
                  username: "Testing",
                  password: "Testing",
                })
              )
            }
          >
            Continue
          </Button>
        </ContainerItem>
      </ContainerFull>
    </div>
  );
}

export default Component;
