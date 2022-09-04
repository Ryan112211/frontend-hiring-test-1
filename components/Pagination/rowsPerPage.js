import {
  Divider,
  makeStyles, Select, Typography,
} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

const styles = makeStyles(() => ({
  offsetContainer: {
    display: 'flex',
    alignItems: 'center',

  },
  selectRows: {
    marginLeft: '10px',
  },
  options: {
    padding: '5px 10px',
    width: '50px',
  },
}))
function Component(props) {
  const { handler } = props
  const classes = styles()
  return (
    <>
      <div className={classes.offsetContainer}>
        <Typography>Rows Per Page</Typography>
        <Select
          className={classes.selectRows}
          disableUnderline
          defaultValue={10}
          onChange={handler.setLimit}
        >
          <option className={classes.options} value={10}>10</option>
          <Divider />
          <option className={classes.options} value={20}>20</option>
        </Select>
      </div>
    </>
  )
}
Component.propTypes = {
  handler: PropTypes.shape({
    setLimit: PropTypes.func.isRequired,
  }).isRequired,

}
export const RowsPerPage = Component
export default RowsPerPage
