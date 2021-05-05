import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#55f',
    },
    secondary: {
      main: '#5f5',
    },
    error: {
      main: '#f55',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;