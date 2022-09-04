import { wrapper } from "@_redux/index";
import me from "@_utils/me";
import { connect } from "react-redux";
import router from "next/router";
import {
  changeLimit,
  dashboardNoteAddUpdate,
  dashboardNoteAdd,
} from "./ducks/actions";
import Component from "./component";

export const getProps = wrapper.getServerSideProps(async (context) => {
  const is = await me.authenticate(context);

  await me.initialise(context);

  if (!is.authenticated) {
    return is.props;
  }

  return { props: {} };
});

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    data: state.dashboard.data,
    error: state.dashboard.error,
    isError: state.dashboard.isError,
    isLoading: state.dashboard.isLoading || state?.data?.isLoading,
    page: state.dashboard.page,
    isSuccess: state.dashboard.isSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handler: {
      onNoteChange(noteContent, id) {
        dispatch(dashboardNoteAddUpdate(noteContent, id));
      },

      setLimit(event) {
        const { page = 1 } = router?.query;
        dispatch(changeLimit(event.target.value, page));
      },
      submit() {
        dispatch(dashboardNoteAdd());
      },

      handlePageChange(_, value) {
        router.push(`/dashboard?page=${value}`);
      },
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
