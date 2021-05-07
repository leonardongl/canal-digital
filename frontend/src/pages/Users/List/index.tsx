import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserTable from '../../../components/users/UserTable';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Title from '../../../components/layout/Title';
import { RouteComponentProps } from "react-router-dom";

const Users: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [openAlert, setOpenAlert] = useState(false);
  
  useEffect(() => {
    if (props.location.state) {
      setOpenAlert(true);
    }
  }, []);

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
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Collapse in={openAlert}>
            <Alert
              variant="filled"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Dados atualizados com sucesso!
            </Alert>
          </Collapse>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
}

export default Users;
