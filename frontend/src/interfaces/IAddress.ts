export default interface IAddress {
  id: number|null,
  cep: string,
  number: string,
  street: string,
  complement: string,
  district: string,
  city: string,
  state: string,
  user_id: number|null,
  created_at: string|null,
  updated_at: string|null,
}