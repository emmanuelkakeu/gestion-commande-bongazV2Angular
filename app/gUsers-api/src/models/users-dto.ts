
import { AdresseDto } from './adresse-dto';
import { Status } from './enums/statut';
import { Role } from './role';

export class UsersDto {
  id: number;
  firstName: string;
  name: string;
  lastName: string;
  email: string;
  adresseDto: AdresseDto;
  password: string;
  contactDetails: string;
  status: Status;
  dateCreated: Date;
  imageFileName: string;
  role: Role;
  typeUtilisateur: string;
  latitude:number;
  longitude:number;

}
