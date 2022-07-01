export interface IUserData {
  name?: string;
  phone: string;
  email?: string;
  address?: IUserAddress[];
  id?: number;
  isActive?: true;
  roles?: ['seller'];
  uuid?: string;
}

export interface IUserAddress {
  ISOCode: string;
  area: string | null;
  block: string | null;
  city: string | null;
  cityDistrict: string | null;
  country: string;
  flat: string | null;
  house: string | null;
  id: number;
  lat: string | null;
  lng: string | null;
  postalCode: string | null; 
  region: string;
  settlement: string | null;
  street: string | null;
  value: string;
}

