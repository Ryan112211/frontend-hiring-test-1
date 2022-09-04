import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import { Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    '@media screen and (max-width: 767px)': {
      // padding: '0 0 15px!important',
    },
  },
}))

function Component({ className = '', children, ...rest }) {
  const classes = styles()
  const classname = className && className !== ''
    ? classnames(classes.container, className)
    : classes.container
  return (
    <Grid item className={classname} {...rest}>
      {children}
    </Grid>
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

export const Item = Component

export default Item
