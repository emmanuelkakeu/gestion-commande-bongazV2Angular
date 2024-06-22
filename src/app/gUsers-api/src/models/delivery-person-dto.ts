/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface DeliveryPersonDto {
  id?: number;
  name?: string;
  firstName?: string;
  email?: string;
  adresseDto?: AdresseDto;
  contactDetails?: string;
  imageFileName?: string;
}
