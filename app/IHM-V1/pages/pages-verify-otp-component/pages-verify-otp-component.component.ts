import { Component } from '@angular/core';
import { UserService } from '../../services/users-service';
import { Router } from '@angular/router';
import { VerifyOtpRequest } from '../../../gUsers-api/src/models/verify-otp-request';


@Component({
  selector: 'app-pages-verify-otp-component',
  templateUrl: './pages-verify-otp-component.component.html',
  styleUrl: './pages-verify-otp-component.component.css'
})
export class PagesVerifyOtpComponentComponent {

  otpRequest = new VerifyOtpRequest('', '', '');

  constructor(private userService: UserService, private router: Router) {}

  verifyOtp() {
    this.userService.verifyOtp(this.otpRequest).subscribe({
      next: (response) => {
        alert('Inscription complétée avec succès.');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error(error);
        alert('Échec de la vérification de l\'OTP. Veuillez réessayer.');
      }
    });
  }

}
