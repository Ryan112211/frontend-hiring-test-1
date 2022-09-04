import React from "react";
import PropTypes from "prop-types";

import LayoutPlain from "@layouts/Plain";

import { useRouter } from "next/router";

import Signin from "./Signin";

function Component(props) {
  const history = useRouter();
  const { isAuthenticated } = props;

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [history, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <LayoutPlain>
        <Signin />
      </LayoutPlain>
    );
  }

  return null;
}

Component.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Component;
