import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

import { Alert } from '@components'

const styles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
}))

function Component(props) {
  const { snackbar, handler, children } = props
  const classes = styles()

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <main className={classes.content}>
        <div style={{ flex: '1 0 auto', paddingBottom: '10px' }}>
          {children}
        </div>
      </main>
      <Alert
        duration={6000}
        message={snackbar.message}
        open={snackbar.open}
        variant={snackbar.variant}
        onClose={handler.snackbarClose}
        showCloseButton
      />
    </main>
  )
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
  }).isRequired,
  handler: PropTypes.shape({
    snackbarClose: PropTypes.func,
  }).isRequired,
}

export default Component
