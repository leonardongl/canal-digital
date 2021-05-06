import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { HeaderTableCell } from './styles';


function createData(name: string, email: string, phone: number, age: number) {
  return { name, email, phone, age };
}
const rows = [
  createData('Leonardo Noronha', 'leonardongl@gmail.com', 92981146884, 24),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <HeaderTableCell>Nome</HeaderTableCell>
            <HeaderTableCell>E-mail</HeaderTableCell>
            <HeaderTableCell align="center">Telefone</HeaderTableCell>
            <HeaderTableCell align="center">Idade</HeaderTableCell>
            <HeaderTableCell align="center">Ações</HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell scope="row">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">
                <IconButton component="span" size="small" >
                  <EditIcon />
                </IconButton>
                <IconButton component="span" size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}