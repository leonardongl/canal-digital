import React, { useState } from 'react';
import UserTable from '../../components/users/UserTable';
import UserForm from '../../components/users/UserForm';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Title from '../../components/layout/Title';

const Users: React.FC = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

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
            <Button variant="contained" color="primary" onClick={openModal}>
              <AddIcon /> Novo Usuário
            </Button>
          </Box>
        </Grid>
      </Grid>
      <UserForm open={open} setOpen={setOpen} />
      <UserTable />
    </>
  );
}

export default Users;
