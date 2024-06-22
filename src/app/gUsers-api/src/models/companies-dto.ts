/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface CompaniesDto {
  id?: number;
  name?: string;
  adresseDto?: AdresseDto;
  contactDetails?: string;
  imageFileName?: string;
  openingHours?: string;
}
