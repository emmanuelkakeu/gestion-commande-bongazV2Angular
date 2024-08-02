import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { SupplierDto } from '../../gUsers-api/src/models/supplier-dto';
import { CompaniesDto } from '../../gUsers-api/src/models/companies-dto';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = 'http://localhost:8082/gestionUtilisateurs/v1'; // Assurez-vous de mettre l'URL correcte de votre API

  constructor(private http: HttpClient) { }

  saveSupplier(supplierDto: SupplierDto, imageFile: Blob): Observable<SupplierDto> {
    const formData: FormData = new FormData();
    formData.append('supplierDTO', JSON.stringify(supplierDto));
    formData.append('imageFile', imageFile);

    return this.http.post<SupplierDto>(`${this.baseUrl}/suppliers/create`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  findSupplierById(id: number): Observable<SupplierDto> {
    return this.http.get<SupplierDto>(`${this.baseUrl}/suppliers/${id}`);
  }

 // Vérifiez que les réponses du backend sont correctes et contiennent les données attendues

findAllSupplier(): Observable<SupplierDto[]> {
  return this.http.get<SupplierDto[]>(`${this.baseUrl}/suppliers/all`).pipe(
    tap(suppliers => console.log('Réponse de findAllSupplier:', suppliers)),
    catchError(err => {
      console.error('Erreur dans findAllSupplier:', err);
      return throwError(() => err);
    })
  );
}


  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/suppliers/delete/${id}`);
  }

  saveCompanies(componiesDto: CompaniesDto, imageFile: Blob): Observable<CompaniesDto> {
    const formData: FormData = new FormData();
    formData.append('supplierDTO', JSON.stringify(componiesDto));
    formData.append('imageFile', imageFile);

    return this.http.post<CompaniesDto>(`${this.baseUrl}/companies/create`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  findCompaniesById(id: number): Observable<CompaniesDto> {
    return this.http.get<CompaniesDto>(`${this.baseUrl}/companies/${id}`);
  }

  findAllCompanies(): Observable<CompaniesDto[]> {
    return this.http.get<CompaniesDto[]>(`${this.baseUrl}/companies/all`).pipe(
      tap(companies => console.log('Réponse de findAllCompanies:', companies)),
      catchError(err => {
        console.error('Erreur dans findAllCompanies:', err);
        return throwError(() => err);
      })
    );
  }


  deleteCompanies(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/companies/delete/${id}`);
  }
}
