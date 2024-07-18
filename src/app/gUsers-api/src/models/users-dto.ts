
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

  // constructor(
  //   id: number = 0,
  //   firstName: string = '',
  //   name: string = '',
  //   lastName: string = '',
  //   email: string = '',
  //   adresseDto: AdresseDto = { adresse1: '', adresse2: '', ville: '', pays: '' },
  //   password: string = '',
  //   contactDetails: string = '',
  //   status: Status = Status.DEACTIVER,
  //   dateCreated: Date = new Date(),
  //   imageFileName: string = '',
  //   role: Role = new Role(),
  //   typeUtilisateur: string = ''
  // ) {
  //   this.id = id;
  //   this.firstName = firstName;
  //   this.name = name;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.adresseDto = adresseDto;
  //   this.password = password;
  //   this.contactDetails = contactDetails;
  //   this.status = status;
  //   this.imageFileName = imageFileName;
  //   this.role = role;
  //   this.typeUtilisateur = typeUtilisateur;
  // }
}
