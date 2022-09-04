import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCreateButton = styled(Button)`
    text-transform: none;
    color:${(props) => props.color || '#810BCF'};
    font-weight: 700;
    font-size: 16px;
    border: 1px solid ${(props) => props.color || '#FFFFFF'};
    border-radius: 8px;
    height: 40px;
    padding: 12px 32px;
    /* margin: 10px; */
    box-shadow: none;
    box-sizing: border-box;
    background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
    :hover {
      background-color: ${(props) => props.hoverBackground || '#FFFFFF'};
      box-shadow: none;
    }
    `

function Component({
  variant = 'contained', label, customRoute, Icon, ...restProps
}) {
  return (
    <StyledCreateButton
      id="add-button"
      variant={variant}
      startIcon={Icon}
      onClick={customRoute}
      {...restProps}
    >
      {label}
    </StyledCreateButton>

  )
}

Component.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  customRoute: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
}

export const CreateButton = Component

export default CreateButton
