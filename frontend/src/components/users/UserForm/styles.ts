import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export const HeaderTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2a2b60',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);