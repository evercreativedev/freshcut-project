import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#F2BC3D',
      },
      secondary: {
        main: '#B9B9C3',
        contrastText: '#ffffff',
      },
      danger: {
        main: '#eb196e',
      },
      background: {
        default: '#000000',
        primary: '#151417',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#A19DAA',
      },
    },
    custom: {
      palette: {
        white: '#FFFFFF',
        lightGrey: '#F8F8F8',
        darkGrey: '#5E5873',
        lightBlue: '#C8E6FE',
        blue: '#0050ff',
        green: '#28C76F',
        border: '#28262C',
      }
    },
  })
)

export default theme
