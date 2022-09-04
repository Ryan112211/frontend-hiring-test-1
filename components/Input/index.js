import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  Typography,

} from '@material-ui/core'
import {
  ContainerItem,
} from '@components'

function Component({
  label, value, onChange, placeholder, id, size, required, type, InputProps,
  helperText, error, name, disabled,
}) {
  return (
    <>
      <ContainerItem xs={12}>
        <Typography className={required ? 'required' : ''}>{label}{ }</Typography>
      </ContainerItem>
      <ContainerItem xs={12}>
        <TextField
          id={id}
          fullWidth
          type={type}
          inputProps={InputProps}
          size={size}
          value={value}
          name={name}
          error={error}
          helperText={helperText}
          variant="outlined"
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </ContainerItem>
    </>
  )
}
Component.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  InputProps: PropTypes.shape({
    inputProps: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }).isRequired,
}
Component.defaultProps = {
  id: '',
  value: '',
  size: 'small',
  label: 'Title',
  required: true,
  name: '',
  helperText: '',
  error: false,
  onChange: () => ({}),
  placeholder: 'Title...',
  type: 'text',
  disabled: false,
}
export default Component
