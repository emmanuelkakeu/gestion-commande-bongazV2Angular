/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface CompaniesDto {
  id?: number;
  name?: string;
  adresseDto?: AdresseDto;
  imageUrl?:string;
  contactDetails?: string;
  imageFileName?: string;
  openingHours?: string;
}
