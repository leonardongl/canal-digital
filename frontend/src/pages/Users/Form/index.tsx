import React, { useState, useEffect } from 'react';
import { Link, useParams  } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Title from '../../../components/layout/Title';
import viacep from '../../../services/viacep';
import IViaCEP from '../../../interfaces/IViaCEP';
import IUser from '../../../interfaces/IUser';
import api from '../../../services/api';


const UserForm: React.FC = () => {
  const params = useParams();
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState<IUser>();
  const [invalidCEP, setInvalidCEP] = useState<boolean>(false);
  const callViaCEP = (e: any) => viaCEP(e.target.value);

  const setAddressFields = (data: IViaCEP) => {
    (document.getElementById('street') as HTMLInputElement).value = data.logradouro;
    (document.getElementById('complement') as HTMLInputElement).value = data.complemento;
    (document.getElementById('district') as HTMLInputElement).value = data.bairro;
    (document.getElementById('city') as HTMLInputElement).value = data.localidade;
    (document.getElementById('state') as HTMLInputElement).value = data.uf;
  }

  const setUserFields = (data: IUser) => {
    if (data) {
      setUser(data);
      (document.getElementById('name') as HTMLInputElement).value = data.name;
      (document.getElementById('email') as HTMLInputElement).value = data.email;
      (document.getElementById('phone') as HTMLInputElement).value = data.phone;
      (document.getElementById('cep') as HTMLInputElement).value = data.address.cep;
      (document.getElementById('street') as HTMLInputElement).value = data.address.street;
      (document.getElementById('number') as HTMLInputElement).value = data.address.number;
      (document.getElementById('complement') as HTMLInputElement).value = data.address.complement;
      (document.getElementById('district') as HTMLInputElement).value = data.address.district;
      (document.getElementById('city') as HTMLInputElement).value = data.address.city;
      (document.getElementById('state') as HTMLInputElement).value = data.address.state;
    }
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
  
  async function submitForm(data: any): Promise<void> {
    try {
      console.log(user);
      user?.id ? await api.put<IUser>(`users/${user.id}`, data) : await api.post<IUser>(`users`, data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getUser(id: number): Promise<void> {
    try {
      const { data } = await api.get<IUser>(`users/${id}`);
      setUserFields(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    let formParams = JSON.parse(JSON.stringify(params));
    formParams.id && getUser(formParams.id);
  }, []);

  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: 20 }}>
        <Grid item xs={12}>
          <Title>
            Usuário
          </Title>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off" id="form" onSubmit={handleSubmit((data) => submitForm((data)))}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              id="name" 
              name="name" 
              helperText="Nome Completo"
              inputRef={register} 
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              fullWidth
              id="email"
              name="email"
              helperText="E-mail" 
              inputRef={register}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField 
              fullWidth 
              id="phone" 
              name="phone" 
              helperText="Telefone"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField 
              fullWidth 
              id="cep" 
              name="cep" 
              type="number" 
              helperText={invalidCEP ? 'CEP Inválido' : 'CEP'}
              error={invalidCEP}
              onChange={callViaCEP} 
              inputRef={register}
            />
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={6}>
            <TextField 
              fullWidth 
              id="street" 
              name="street"
              helperText="Logadouro" 
              inputRef={register}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField 
              fullWidth 
              id="complement" 
              name="complement" 
              helperText="Complemento" 
              inputRef={register} 
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField 
              fullWidth 
              id="number" 
              name="number" 
              helperText="Número" 
              inputRef={register} 
            />
          </Grid>
          <Grid item xs={5}>
            <TextField 
              fullWidth 
              id="district" 
              name="district" 
              helperText="Bairro" 
              inputRef={register} 
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField 
              fullWidth 
              id="city" 
              name="city" 
              helperText="Cidade" 
              inputRef={register} 
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField 
              fullWidth 
              id="state" 
              name="state" 
              helperText="UF" 
              inputRef={register} 
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" component={Link} to="/users" style={{ margin: '40px 10px' }}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary" style={{ margin: '40px 10px' }}>
            Salvar
          </Button>
        </Box>
      </form>
    </>
  );
}

export default UserForm;