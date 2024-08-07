import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthentificationDTO } from '../../gUsers-api/src/models/authentification-dto';
import { VerifyOtpRequest } from '../../gUsers-api/src/models/verify-otp-request';
import { RequestResultDto } from '../../gUsers-api/src/models/request-result-dto';
import { tap } from 'rxjs/operators';
import { UsersDto } from '../../gUsers-api/src/models';
import { UsersApiService } from '../../gUsers-api/src/services/users-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  credentials: AuthentificationDTO = {
    username: '',
    password: ''
  };




  private apiUrl = 'http://localhost:8082/gestionUtilisateurs/v1';

  constructor(private http: HttpClient) {}




  inscription(dto: UsersDto): Observable<RequestResultDto<Map<string, string>>> {
    return this.http.post<RequestResultDto<Map<string, string>>>(`${this.apiUrl}/users/inscription`, dto)
    .pipe(
      tap(response => {
        console.log('Inscription response:', response);
      })
    );
  }


  verifyOtp(request: VerifyOtpRequest): Observable<RequestResultDto<Map<string, string>>> {
    return this.http.post<RequestResultDto<Map<string, string>>>(`${this.apiUrl}/users/verify-otp`, request).pipe(
      tap(response => {
        console.log('Verify OTP response:', response);
      })
    );;
  }




  connexion(credentials: AuthentificationDTO): Observable<RequestResultDto<{ jwt: string; user: UsersDto }>> {
    console.log('Connexion request payload:', credentials);
    return this.http.post<RequestResultDto<{ jwt: string; user: UsersDto }>>(`${this.apiUrl}/users/connexion`, credentials).pipe(
      tap(response => {
        console.log('Connexion response:', response);
        if (response.data && response.data.jwt) {
          const jwtToken = response.data.jwt;
          localStorage.setItem('Token', jwtToken);
          console.log(`L'élément authToken a été défini avec la valeur : ${jwtToken}`);
        } else {
          console.log('Token non défini dans la réponse.');
        }

        if (response.data && response.data.user) {
          this.setConnectedUser(response.data.user);
          console.log('Utilisateur connecté:', response.data.user);
        } else {
          console.log('Erreur: Aucune information utilisateur reçue.');
        }
      })
    );
  }

  setConnectedUser(userDto: UsersDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(userDto));

  }

  getConnectedUser(): UsersDto | null {
    const connectedUser = localStorage.getItem('connectedUser');
    console.log('Utilisateur récupéré du localStorage:', JSON.parse(connectedUser!)); // Log pour débogage
    if (connectedUser) {
      try {
        return JSON.parse(connectedUser) ;

      } catch (error) {
        console.error('Erreur de parsing JSON:', error);
        return null;
      }
    }


    return null;
  }
  getRole(): string | null {
    const connectedUser = this.getConnectedUser();
    if (connectedUser && connectedUser.role) {
      return connectedUser.role.libelle;
    }
    return null;
  }




  setAccessToken(requestResultDto: RequestResultDto<{ bearer: string }>): void {
    localStorage.setItem('Token', JSON.stringify(requestResultDto));
  }

  uploadImage(file: File): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file, file.name);

    const userId = this.getConnectedUser()?.id;
    if (!userId) {
      throw new Error('User ID not found');
    }

    return this.http.post<void>(`${this.apiUrl}/users/${userId}`, formData);
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }



}
