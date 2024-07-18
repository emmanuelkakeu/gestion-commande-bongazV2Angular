import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { GasRetailerDto } from '../../gUsers-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class GasRetailerService {

  private apiUrl = 'http://localhost:8082/gestionUtilisateurs/v1/gasRetailer';

  constructor(private http: HttpClient) { }

  getNearbyRetailers(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/nearby?lat=${lat}&lng=${lng}`);
  }

  saveRetailers(gasRetailerDto: GasRetailerDto, imageFile: Blob): Observable<GasRetailerDto> {
    const formData: FormData = new FormData();
    formData.append('gasRetailerDto', JSON.stringify(gasRetailerDto));
    formData.append('imageFile', imageFile);

    return this.http.post<GasRetailerDto>(`${this.apiUrl}/create`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  findRetailerById(id: number): Observable<GasRetailerDto> {
    return this.http.get<GasRetailerDto>(`${this.apiUrl}/${id}`);
  }

 // Vérifiez que les réponses du backend sont correctes et contiennent les données attendues

findAllRetailer(): Observable<GasRetailerDto[]> {
  return this.http.get<GasRetailerDto[]>(`${this.apiUrl}/all`).pipe(
    tap(gasRetailer => console.log('Réponse de findAllRetailer:', gasRetailer)),
    catchError(err => {
      console.error('Erreur dans findAllRetailer:', err);
      return throwError(() => err);
    })
  );
}


  deleteRetailer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

}

