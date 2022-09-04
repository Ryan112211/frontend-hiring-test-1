import { authAuthenticated, authSignout } from "@_global/auth/actions";

import { snackbarOpen } from "@_global/snackbar/actions";

import cookie from "./cookie";

export default {
  initialise: async (context) => {
    const { req, store } = context;

    const token = cookie.extract(req, "token=");

    if (token) {
      const isValid = cookie.validate(token);
      if (isValid) {
        store.dispatch(authAuthenticated(true));
      } else {
        snackbarOpen("error", "LOGIN ERROR");
      }
    } else {
      cookie.remove(context, "token");
      store.dispatch(authSignout());
    }
  },

  authenticate: async (context) => {
    const { req } = context;

    const token = cookie.extract(req, "token=");

    const result = {
      authenticated: false,
      props: {
        redirect: {
          destination: "/",
          permanent: false,
        },
      },
    };
    if (!token || token === "") {
      return result;
    }

    const isValid = cookie.validate(token);
    if (!isValid) {
      cookie.remove(context, "token");
      return result;
    }
    return {
      authenticated: true,
      props: { token },
    };
  },
};
