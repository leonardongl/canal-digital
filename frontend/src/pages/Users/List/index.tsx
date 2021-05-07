import React from 'react';
import { Link } from "react-router-dom";
import UserTable from '../../../components/users/UserTable';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Title from '../../../components/layout/Title';

const Users: React.FC = () => {
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: 20 }}>
        <Grid item xs={6}>
          <Title>
            Usuários
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" component={Link} to="/users/create">
              <AddIcon /> Novo Usuário
            </Button>
          </Box>
        </Grid>
      </Grid>
      <UserTable />
    </>
  );
}

export default Users;
