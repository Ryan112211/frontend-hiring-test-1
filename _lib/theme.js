import { createTheme } from '@material-ui/core/styles'

import {
  blue,
  pink,
  red,
} from '@material-ui/core/colors'

const theme = createTheme({
  typography: {
    fontFamily: "'Anek Latin', sans-serif",
    fontSize: 15,
    h1: {
      letterSpacing: '0.20rem',
    },
    h2: {
      letterSpacing: '0.20rem',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 400,
    },
  },
  palette: {
    // type: 'dark',
    backgroud: {
      default: '#292930',
    },
    text: {
      primary: '#181818',
      secondary: '#292930',
    },
    primary: {
      light: '#C085E7',
      main: '#810BCF',
      dark: '#4D077C',
    },
    secondary: {
      light: '#515159',
      main: '#292930',
      dark: '#000007',
    },
    success: {
      light: '#75e97f',
      main: '#3eb650',
      dark: '#008522',
    },
    error: {
      light: pink[400],
      main: pink[500],
      dark: pink[600],
    },
    warning: {
      light: '#fff368',
      main: '#fcc133',
      dark: '#c59100',
    },
    default: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#eeeeee',
      darker: '#c7c7c7',
    },
    facebook: {
      light: blue[700],
      main: blue[800],
      dark: blue[900],
    },
    google: {
      light: red[500],
      main: red[600],
      dark: red[700],
    },
    gray: {
      light: '#DFE6ED',
      main: '#788896',
    },
    green: {
      main: '#30826C',
    },
    amber: {
      light: '#fff350',
      main: '#ffc107',
      dark: '#c79100',
    },
    cyan: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
    },
    pink: {
      light: '#ff6090',
      main: '#e91e63  ',
      dark: '#b0003a',
    },
    purple: {
      light: '#7a6dc1',
      main: '#4a4290',
      dark: '#171b62',
    },
    white: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
    },
    zoom: {
      light: '#67a0ff',
      main: '#0e72ed',
      dark: '#0048ba',
    },
  },
})

export default theme
