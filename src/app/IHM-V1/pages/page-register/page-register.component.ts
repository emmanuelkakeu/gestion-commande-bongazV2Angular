import { Component } from '@angular/core';
import { UserService } from '../../services/users-service';
import { Router } from '@angular/router';
import { UsersDto } from '../../../gUsers-api/src/models';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.css'
})
export class PageRegisterComponent {

  user: UsersDto;

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
