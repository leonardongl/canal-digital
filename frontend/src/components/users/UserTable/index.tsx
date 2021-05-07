import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { HeaderTableCell } from './styles';
import IUser from '../../../interfaces/IUser';
import api from '../../../services/api';

const createData = (name: string, email: string, phone: string) => {
  return { name, email, phone };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage] = useState<number>(5);
  const [open, setOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();
  const classes = useStyles();

  const deleteUserModal = (id: number) => {
    setUserId(id);
    setOpen(true);
  };

  async function deleteUser(): Promise<void> {
    try {
      userId && await api.delete<IUser>(`users/${userId}`);
      getUsers();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

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
    <>
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Deseja excluir esse usuário?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Todos os dados serão perdidos e você não poder recuperar futuramente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={deleteUser} color="secondary">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
      
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
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={user.id}>
                <TableCell scope="row">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">
                  <Button size="small" color="primary" component={Link} to={`/users/edit/${user.id}`}>
                    <EditIcon />
                  </Button>
                  {
                    <Button size="small" color="secondary" onClick={() => deleteUserModal(user.id ?? 0)}>
                      <DeleteIcon />
                    </Button>
                  }
                </TableCell>
              </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </TableContainer>
    </>
  );
}

export default UserTable;