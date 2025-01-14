import React from 'react'

import { CircularProgress, makeStyles } from '@material-ui/core'

const styles = makeStyles(() => ({
  overlay: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'transparent',
    zIndex: 1401,
    top: 0,
    left: 0,
  },
  loader: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}))

const Component = () => {
  const classes = styles()
  return (
    <div className={classes.overlay}>
      <CircularProgress className={classes.loader} color="secondary" />
    </div>
  )
}

export const Circular = Component

export default Circular
