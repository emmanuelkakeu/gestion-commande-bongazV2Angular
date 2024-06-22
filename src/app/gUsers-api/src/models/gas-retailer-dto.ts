/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface GasRetailerDto {
  id?: number;
  firstName?: string;
  name?: string;
  lastName?: string;
  adresseDto?: AdresseDto;
  contactDetails?: string;
  status?: 'ACTIVER' | 'DEACTIVER';
  dateCreated?: string;
  imageFileName?: string;
  openingHours?: string;
}
