import Cookies, { parseCookies } from "nookies";

import jwtDecode from "jwt-decode";

export default {
  validate: (token) => {
    const decoded = jwtDecode(token);
    const timestamp = new Date().getTime();
    const maxAge = parseInt(decoded.exp - timestamp / 1000, 10);
    const expires = new Date(Date.now() + maxAge).getTime();

    if (expires > timestamp) {
      return true;
    }
    return false;
  },
  set: (context, name, value, options) => {
    // Set
    Cookies.set(context, name, value, options);
  },
  get: (context, name) => {
    const cookie = parseCookies(context);
    return cookie[name] ? cookie[name] : undefined;
  },
  remove: (context, name) => {
    Cookies.destroy(context, name, {
      path: "/",
    });
  },
  extract: (req, delimiter) => {
    const { cookie = "" } = req.headers;
    if (cookie !== "") {
      return cookie.split(delimiter)[1];
    }
    return cookie;
  },
};
