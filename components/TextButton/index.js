import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = makeStyles((theme) => ({
  actionWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      textDecoration: 'underline',
    },
  },
  action: {
    fontSize: ({ fontSize }) => fontSize,
    fontWeight: 600,
    marginLeft: theme.spacing(0.5),
  },
}))

function Component(props) {
  const {
    fontSize, icon, className, style, children, onClick,
  } = props
  const classes = styles({ fontSize })

  return (
    <div
      className={`${classes.actionWrapper} ${className}`}
      style={style}
      onClick={onClick}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          onClick()
        }
      }}
      role="button"
      tabIndex={0}
    >
      {icon}
      <Typography className={classes.action}>{children}</Typography>
    </div>
  )
}

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Component.defaultProps = {
  children: '',
  className: '',
  icon: <></>,
  fontSize: '1em',
  onClick: () => {},
  style: {},
}

export const Content = Component

export default Content
