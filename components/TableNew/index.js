import React from 'react'
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    border: '1px solid #dedede',
    marginBottom: theme.spacing(2),
    background: 'white',
    borderRadius: '8px',
    maxHeight: '550px',
  },
  placement: {
    backgroundColor: theme.palette.backgroud.default,
    color: theme.palette.default.light,
    padding: 5,
  },
  tableRow: {
    height: '40px',

    verticalAlign: 'middle',
  },
  tablePagination: {
    border: 'none',
    '& .MuiTablePagination-spacer': {
      display: 'none',
    },
  },
  headerStyles: {
    backgroundColor: '#FAFAFA',
    fontWeight: 700,
    fontSize: '14px',
    color: '#464A53',
    '&:not(:first-child)': {
      textAlign: 'center',
    },
  },
  horizontalCenter: {
    '&:not(:first-child)': {
      textAlign: 'center',
    },
  },
}))

export default function Component(props) {
  const {
    columns, data, key, isLoading,
  } = props

  const classes = styles()

  return (
    <TableContainer className={classes.table}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {columns.map(
              (
                {
                  field, header, headerName, tableHeaderCellProps, headerStyle,
                },
                columnIndex,
              ) => (
                <TableCell
                  key={field || columnIndex}
                  {...tableHeaderCellProps}
                  style={headerStyle}
                  className={classes.headerStyles}
                >
                  {
                   header || headerName
                  }
                </TableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && (
          <TableRow className={classes.tableRow}>
            <TableCell colSpan={7} align="center">
              <CircularProgress /> <br />
              <b>Getting Results...</b>
            </TableCell>
          </TableRow>
          )}
          {!isLoading && !data?.length && (
          <TableRow className={classes.tableRow}>
            <TableCell colSpan={7} align="center">
              <b>No data found</b>
            </TableCell>
          </TableRow>
          )}
          {data
            ?.map((row, rowIndex) => {
              const k = key && row[key] ? row[key] : rowIndex
              return (
                <TableRow className={classes.tableRow} key={k}>
                  {columns.map(
                    ({ field, render, tableBodyCellProps }, columnIndex) => (
                      <TableCell
                        key={field || columnIndex}
                        component="th"
                        scope="row"
                        {...tableBodyCellProps}
                        className={classes.horizontalCenter}
                      >
                        {render
                          ? render(row[field], row, rowIndex)
                          : row[field]}
                      </TableCell>
                    ),
                  )}
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Component.defaultProps = {
  data: [],
  key: 'id',
  withCheckbox: false,
  rowsPerPage: 10,
  page: 0,
  isLoading: false,
}

Component.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  key: PropTypes.string,
  withCheckbox: PropTypes.bool,
  isLoading: PropTypes.bool,
}
