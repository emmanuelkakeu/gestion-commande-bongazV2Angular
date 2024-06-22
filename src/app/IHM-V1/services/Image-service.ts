import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private baseUrl = 'http://localhost:8084/gestionCommande/v1';
  private baseUrlUsers = 'http://localhost:8082/api/images';

  constructor(private http: HttpClient) {}

  getImage(imageName: string): Observable<Blob> {
    const url = `${this.baseUrl}/image/vue/${imageName}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError(error => {
        console.error(`Erreur lors de la récupération de l'image ${imageName}`, error);
        return throwError(() => new Error(`Erreur lors de la récupération de l'image ${imageName}`));
      })
    );
  }

  getImageUsers(imageName: string): Observable<Blob> {
    const url = `${this.baseUrlUsers}/vue/${imageName}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError(error => {
        console.error(`Erreur lors de la récupération de l'image ${imageName}`, error);
        return throwError(() => new Error(`Erreur lors de la récupération de l'image ${imageName}`));
      })
    );
  }
}
