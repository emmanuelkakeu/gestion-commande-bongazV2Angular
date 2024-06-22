/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface IndividualClientDto {
  id?: number;
  firstName?: string;
  name?: string;
  lastName?: string;
  adresseDto?: AdresseDto;
  contactDetails?: string;
  imageFileName?: string;
}
