export default interface IAddress {
  cep: string,
  number: string|null,
  street: string,
  complement: string,
  district: string,
  city: string,
  state: string,
}