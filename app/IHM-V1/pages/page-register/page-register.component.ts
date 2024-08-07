import { Component } from '@angular/core';
import { UserService } from '../../services/users-service';
import { AdresseDto } from '../../../gUsers-api/src/models/adresse-dto';
import { Status } from '../../../gUsers-api/src/models/enums/statut';
import { Role } from '../../../gUsers-api/src/models/role';
import { Router } from '@angular/router';

export class UsersDto {
  id: number;
  firstName: string;
  name: string;
  lastName: string;
  email: string;
  adresseDto: AdresseDto = {}; // Initialisation de l'objet adresseDto
  password: string;
  contactDetails: string;
  status: Status;
  dateCreated: Date;
  imageFileName: string;
  role: Role;
  typeUtilisateur: string = ''; // Initialisation de typeUtilisateur
  latitude: number;
  longitude: number;
  // Champs spécifiques pour l'entreprise
  openingHours?: string;
}

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent {

  user: UsersDto = new UsersDto(); // Initialiser l'objet user

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.userService.inscription(this.user).subscribe({
      next: (response) => {
        alert('Un OTP a été envoyé à votre email.');
        this.router.navigate(['/verify-otp']);
      },
      error: (error) => {
        console.error(error);
        alert('Inscription échouée. Veuillez réessayer.');
      }
    });
  }
}
