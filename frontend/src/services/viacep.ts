import axios from 'axios';

const viacep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 10000,
});

export default viacep;