import { wrapper } from '@_redux'
import { connect } from 'react-redux'

import me from '@_utils/me'
import Component from './component'

export const getProps = wrapper.getServerSideProps(async (context) => {
  await me.initialise(context)

  return { props: {} }
})

function mapStateToProps(state) {
  return {
    error: state.home.error,
    home: state.home,
    isError: state.home.isError,
    isLoading: state.home.isLoading,

    isAuthenticated: state.auth.isAuthenticated,
    employee: state.me.employee,
  }
}

function mapDispatchToProps() {
  return {
    handler: {},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
