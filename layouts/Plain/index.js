import { connect } from 'react-redux'

import { snackbarClose } from '@_global/snackbar/actions'

import { toggleClose, toggleOpen } from '@_global/toggle/actions'

import Component from './component'

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    employee: state.me.employee,
    providers: state.me.providers,
    user: state.me.user,
    snackbar: state.snackbar,
    toggle: state.toggle,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    handler: {
      snackbarClose() {
        dispatch(snackbarClose())
      },
      toggle: {
        open(name) {
          dispatch(toggleOpen(name))
        },
        close() {
          dispatch(toggleClose())
        },
      },
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
