import IAddress from './IAddress';

export default interface IUser {
  name: string,
  email: string,
  phone: string,
  address: IAddress
}