import React from 'react'
import PropTypes from 'prop-types'

import { Container as MuiContainer, Grid } from '@material-ui/core'

import { Box } from './Box'
import { Center } from './Center'
import { Full } from './Full'
import { Item } from './Item'

function Component({ children, maxWidth }) {
  return (
    <MuiContainer maxWidth={maxWidth}>
      <Grid container>{children}</Grid>
    </MuiContainer>
  )
}

Component.defaultProps = {
  maxWidth: 'lg',
}

Component.propTypes = {
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export const Container = Component
export const ContainerBox = Box
export const ContainerCenter = Center
export const ContainerFull = Full
export const ContainerItem = Item

export default Container
