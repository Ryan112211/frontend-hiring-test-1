import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import { Container, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(() => ({
  container: {
    maxWidth: '100%',
    padding: 0,
  },
}))

function Component({ className = '', children, ...rest }) {
  const classes = styles()
  const classname = className && className !== ''
    ? classnames(classes.container, className)
    : classes.container
  return (
    <Container maxWidth="lg" className={classname} {...rest}>
      <Grid container style={{ height: '100%' }}>
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

export const Full = Component

export default Full
