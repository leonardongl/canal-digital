import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const TitleBox = withStyles(() => ({
  root: {
    color: '#2a2b60',
    fontSize: 19,
    fontWeight: 600,
    paddingTop: 7
  },
}))(Box);