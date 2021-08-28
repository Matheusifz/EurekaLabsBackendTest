export interface IAddress {
  cep: string;
  state: string;
  neighborhood: string;
  city: string;
  street: string;
  ibge: string;
  gia: string;
  ddd: string;
  adjunct: string;
}


export interface PTAddress {
  cep: string;
  ibge: string;
  gia: string;
  ddd: string;
  logradouro: string;
  localidade: string;
  bairro: string;
  uf: string;
  complemento: string;
}