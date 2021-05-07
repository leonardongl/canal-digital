import IAddress from './IAddress';

export default interface IUser {
  id: number|null,
  name: string,
  email: string,
  phone: string,
  created_at: string|null,
  updated_at: string|null,
  address: IAddress
}