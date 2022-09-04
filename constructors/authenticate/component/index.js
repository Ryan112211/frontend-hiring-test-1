import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { LinearProgress, Typography, makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    background: 'rgba(255,255,255,.8)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: '7000',
  },
  company: {
    color: theme.palette.primary.main,
  },
  item: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  },
}))

function Component({ employee, isAuthenticated }) {
  const classes = styles()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      if (employee.id === '') {
        router.push('/employee/add')
      }
      router.push('/')
    } else {
      document.location.reload()
    }
  }, [employee, isAuthenticated, router])

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Typography variant="h5" className={classes.company} align="center">
          Welcome back{' '}
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
            {employee.fullname}
          </span>
          !
        </Typography>
        <LinearProgress />
      </div>
    </div>
  )
}

Component.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string,
    fullname: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

export default Component
