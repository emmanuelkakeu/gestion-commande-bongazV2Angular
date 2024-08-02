import { AfterViewInit, Component } from '@angular/core';
import { UserService } from '../../services/users-service';
import { Router } from '@angular/router';
import { AuthentificationDTO } from '../../../gUsers-api/src/models/authentification-dto';
import { UsersApiService } from '../../../gUsers-api/src/services/users-api.service';

@Component({
  selector: 'app-pages-login-component',
  templateUrl: './pages-login-component.component.html',
  styleUrls: ['./pages-login-component.component.css']
})
export class PagesLoginComponentComponent implements AfterViewInit {

  credentials: AuthentificationDTO = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService,
              private router: Router,
              private usersApiService: UsersApiService) {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    this.createStars('.stars', 50);
    this.createStars('.stars2', 50);
    this.createStars('.stars3', 50);
  }

  createStars(selector: string, numberOfStars: number) {
    const container = document.querySelector(selector);
    console.log('Creating stars for', selector, container);
    if (container) {
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        container.appendChild(star);
      }
    }
  }

  onLogin() {
    this.userService.connexion(this.credentials).subscribe({
      next: response => {
        console.log('Réponse de connexion:', response);
        if (response.data && response.data.jwt) {
          const jwtToken = response.data.jwt;
          console.log('Token reçu:', jwtToken);
        } else {
          console.log('Erreur: Aucun token reçu.');
        }

        if (response.data && response.data.user) {
          this.userService.setConnectedUser(response.data.user);
          console.log('Utilisateur connecté:', response.data.user);
          this.router.navigate(['dashboard/clientVue']);
        } else {
          console.log('Erreur: Aucune information utilisateur reçue.');
        }
      },
      error: error => {
        console.error('Erreur lors de la connexion:', error);
      }
    });
  }
}
