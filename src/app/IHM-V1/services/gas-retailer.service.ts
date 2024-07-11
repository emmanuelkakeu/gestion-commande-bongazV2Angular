import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasRetailerService {

  private apiUrl = 'http://localhost:8080/api/retailers';

  constructor(private http: HttpClient) { }

  getNearbyRetailers(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/nearby`, { params: { lat: lat.toString(), lng: lng.toString() } });
  }
}

