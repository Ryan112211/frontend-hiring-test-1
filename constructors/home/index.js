import { connect } from "react-redux";

import { wrapper } from "@_redux";

import me from "@_utils/me";

import Component from "./component";

export const getProps = wrapper.getServerSideProps(async (context) => {
  await me.initialise(context);
  const is = await me.authenticate(context);

  if (is.authenticated) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return { props: {} };
});

function mapStateToProps(state) {
  return {
    error: state.home.error,
    home: state.home,
    isError: state.home.isError,
    isLoading: state.home.isLoading,
    provider: state.home.provider,

    isAuthenticated: state.auth.isAuthenticated,
  };
}

function mapDispatchToProps() {
  return {
    handler: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
