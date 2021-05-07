import React, { useEffect, useState } from 'react';
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
import IUser from '../../../interfaces/IUser';
import api from '../../../services/api';

function createData(name: string, email: string, phone: string) {
  return { name, email, phone };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const [users, setUsers] = useState<IUser[]>([]);
  const classes = useStyles();
  
  async function getUsers(): Promise<void> {
    const { data } = await api.get<IUser[]>(`users`);
    setUsers(data);
    
    users.forEach(user => {
      createData(user.name, user.email, user.phone);
    });
  }
  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <HeaderTableCell>Nome</HeaderTableCell>
            <HeaderTableCell>E-mail</HeaderTableCell>
            <HeaderTableCell align="center">Telefone</HeaderTableCell>
            <HeaderTableCell align="center">Ações</HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(u => (
            <TableRow key={u.name}>
              <TableCell scope="row">{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell align="center">{u.phone}</TableCell>
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