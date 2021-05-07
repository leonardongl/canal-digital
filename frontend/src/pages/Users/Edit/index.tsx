import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Title from '../../../components/layout/Title';
import viacep from '../../../services/viacep';
import IViaCEP from '../../../interfaces/IViaCEP';
import IUser from '../../../interfaces/IUser';


const UserForm: React.FC = () => {
  const [user, setUser] = useState<IUser>();
  const [invalidCEP, setInvalidCEP] = useState<boolean>(false);
  const callViaCEP = (e: any) => viaCEP(e.target.value);

  const setAddressFields = (data: IViaCEP) => {
    setUser({
      id: user?.id ?? null,
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      created_at: user?.created_at ?? '',
      updated_at: user?.updated_at ?? '',
      address: {
        id: user?.address.id ?? null,
        cep: data.cep,
        number: user?.address.number ?? '',
        street: data.logradouro,
        complement: data.complemento,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
        created_at: user?.address.created_at ?? '',
        updated_at: user?.address.updated_at ?? '',
        user_id: user?.address.user_id ?? null,
      }
    })
  }
  
  async function viaCEP(value: string): Promise<void> {
    if (value.length === 8) {
      try {
        setInvalidCEP(false);
        const { data } = await viacep.get<IViaCEP>(`${value}/json`);
        return data.cep ? setAddressFields(data) : setInvalidCEP(true);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  async function submitForm(): Promise<void> {
    console.log(user);
  }

  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: 20 }}>
        <Grid item xs={12}>
          <Title>
            Novo Usuário
          </Title>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off" id="form">
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
          <Grid item xs={3}>
            <TextField 
              fullWidth 
              name="cep" 
              label="CEP" 
              type="number" 
              helperText={invalidCEP && 'CEP Inválido'}
              error={invalidCEP}
              defaultValue={user?.address.cep} 
              onChange={callViaCEP} 
            />
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={6}>
            <TextField fullWidth name="street" value={user?.address.street} helperText="Logadouro" />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth name="complement" value={user?.address.complement} helperText="Complemento" />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth name="complement" defaultValue={user?.address.number} helperText="Número" />
          </Grid>
          <Grid item xs={5}>
            <TextField fullWidth name="district" value={user?.address.district} helperText="Bairro" />
          </Grid>
          <Grid item xs={5}>
            <TextField fullWidth name="city" value={user?.address.city} helperText="Cidade" />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth name="state" value={user?.address.state} helperText="UF" />
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" component={Link} to="/users">
          Cancelar
        </Button>
        <Button onClick={submitForm} variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </>
  );
}

export default UserForm;