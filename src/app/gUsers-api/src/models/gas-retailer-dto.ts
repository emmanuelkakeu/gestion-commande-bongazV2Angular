/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { Role } from './role';
export interface GasRetailerDto {
  latitude: number;
  longitude: number;
  imageUrl: string;
  id?: number;
  firstName?: string;
  name?: string;
  lastName?: string;
  email:string;
  password:string;
  adresseDto?: AdresseDto;
  contactDetails?: string;
  status?: 'ACTIVER' | 'DEACTIVER';
  dateCreated?: string;
  imageFileName?: string;
  openingHours?: string;
  role: Role;

}
