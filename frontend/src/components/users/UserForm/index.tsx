import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import viacep from '../../../services/viacep';
import IViaCEP from '../../../interfaces/IViaCEP';
import IUser from '../../../interfaces/IUser';

interface IProps {
  open: boolean,
  setOpen: Function
}

const UserForm: React.FC<IProps> = (props: IProps) => {
  const [user, setUser] = useState<IUser>();
  const closeModal = () => props.setOpen(false);
  const callViaCEP = (e: any) => viaCEP(e.target.value);

  const setAddressFields = (data: IViaCEP) => {
    setUser({
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      address: {
        cep: data.cep,
        number: '',
        street: data.logradouro,
        complement: data.complemento,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
      }
    })
  }
  
  async function viaCEP(value: string): Promise<void> {
    if (value.length === 8) {
      try {
        const { data } = await viacep.get<IViaCEP>(`${value}/json`);
        return data.cep ? setAddressFields(data) : alert('CEP Inválido!');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <Dialog open={props.open} onClose={closeModal} maxWidth="lg">
        <DialogTitle id="form-dialog-title">Novo Usuário</DialogTitle>
        <DialogContent dividers>
          <form noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth name="name" value={user?.name} label="Nome Completo" />
              </Grid>
              <Grid item xs={7}>
                <TextField fullWidth name="email" value={user?.email} label="E-mail" />
              </Grid>
              <Grid item xs={5}>
                <TextField fullWidth name="phone" value={user?.phone} label="Telefone" />
              </Grid>
              <Divider />
              <Grid item xs={3}>
                <TextField fullWidth name="cep" label="CEP" value={user?.phone} onBlur={callViaCEP} />
              </Grid>
              <Grid item xs={5}>
                <TextField fullWidth name="street" value={user?.address.street} label="Logadouro" />
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth name="complement" value={user?.address.complement} label="Complemento" />
              </Grid>
              <Grid item xs={5}>
                <TextField fullWidth name="district" value={user?.address.district} label="Bairro" />
              </Grid>
              <Grid item xs={5}>
                <TextField fullWidth name="city" value={user?.address.city} label="Cidade" />
              </Grid>
              <Grid item xs={2}>
                <TextField fullWidth name="state" value={user?.address.state} label="UF" />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} variant="contained" color="secondary">
            Cancelar
          </Button>
          <Button onClick={closeModal} variant="contained" color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserForm;