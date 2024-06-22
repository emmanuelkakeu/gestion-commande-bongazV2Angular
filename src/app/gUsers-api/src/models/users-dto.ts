/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { RoleDto } from './role-dto';
export interface UsersDto {
  id?: number;
  firstName?: string;
  name?: string;
  lastName?: string;
  email?: string;
  adresseDto?: AdresseDto;
  password?: string;
  contactDetails?: string;
  status?: 'ACTIVER' | 'DEACTIVER';
  dateCreated?: string;
  imageFileName?: string;
  rolesDto?: Array<RoleDto>;
}
