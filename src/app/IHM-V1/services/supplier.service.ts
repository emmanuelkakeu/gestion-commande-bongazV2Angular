import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierDto } from '../../gUsers-api/src/models/supplier-dto';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = 'http://localhost:8082/gestionUtilisateurs/v1/suppliers'; // Assurez-vous de mettre l'URL correcte de votre API

  constructor(private http: HttpClient) { }

  save(supplierDto: SupplierDto, imageFile: Blob): Observable<SupplierDto> {
    const formData: FormData = new FormData();
    formData.append('supplierDTO', JSON.stringify(supplierDto));
    formData.append('imageFile', imageFile);

    return this.http.post<SupplierDto>(`${this.baseUrl}/create`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  findById(id: number): Observable<SupplierDto> {
    return this.http.get<SupplierDto>(`${this.baseUrl}/${id}`);
  }

  
  findAll(): Observable<SupplierDto[]> {
    return this.http.get<SupplierDto[]>(`${this.baseUrl}/all`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
