import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6075b7',
    },
    secondary: {
      main: '#2a2b60',
    },
    success: {
      main: '#55ff55',
    },
    error: {
      main: '#cb3e45',
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;