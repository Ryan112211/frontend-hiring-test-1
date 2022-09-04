import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import { Container, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  container: {
    maxWidth: 'calc(100% - 30em)',
    padding: theme.spacing(2),
    '@media screen and (max-width: 767px)': {
      maxWidth: '100%',
      padding: 0,
    },
    '@media screen and (max-width: 1280px)': {
      maxWidth: '100%',
    },
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
}))

function Component({ className = '', children, ...rest }) {
  const classes = styles()
  const classname = className && className !== ''
    ? classnames(classes.container, className)
    : classes.container
  return (
    <Container maxWidth="lg" className={classname} {...rest}>
      <Grid container className={classes.grid}>
        {children}
      </Grid>
    </Container>
  )
}

Component.defaultProps = {
  className: '',
}

Component.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.any,
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export const Center = Component

export default Center
