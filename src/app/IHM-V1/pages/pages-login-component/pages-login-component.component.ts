import { Component } from '@angular/core';
import { UserService } from '../../services/users-service';
import { Router } from '@angular/router';
import { AuthentificationDTO } from '../../../gUsers-api/src/models/authentification-dto';
import {RequestResultDto} from '../../../gUsers-api/src/models/request-result-dto'
import { UsersApiService } from '../../../gUsers-api/src/services/users-api.service';
import { UsersDto } from '../../../gUsers-api/src/models/users-dto';

@Component({
  selector: 'app-pages-login-component',
  templateUrl: './pages-login-component.component.html',
  styleUrl: './pages-login-component.component.css'
})
export class PagesLoginComponentComponent {

  credentials: AuthentificationDTO = {
    username: '',
    password: ''
  };


  constructor(private userService: UserService,
    private router: Router,
    private usersApiService:UsersApiService) {}

    onLogin() {
      this.userService.connexion(this.credentials).subscribe({
        next: response => {
          console.log('Réponse de connexion:', response);
          this.router.navigate(['']);
          if (response.data && response.data.jwt) {
            const jwtToken = response.data.jwt;
            console.log('Token reçu:', jwtToken);
          } else {
            console.log('Erreur: Aucun token reçu.');
          }

          if (response.data && response.data.user) {
            this.userService.setConnectedUser(response.data.user);
            console.log('Utilisateur connecté:', response.data.user);
            this.router.navigate(['dashboard/map']);
          } else {
            console.log('Erreur: Aucune information utilisateur reçue.');
          }
        },
        error: error => {
          console.error('Erreur lors de la connexion:', error);
        }
      });
    }


  // getUserByEmail(): void {
  //   this.usersApiService.findByEmail(this.credentials.username)
  //   .subscribe(user => {
  //     this.userService.setConnectedUser(user);
  //   });
  // }

}
