import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CommandeCompaniesFinalDto } from '../../gCmmd-api/src/models/commande-companies-final';

@Injectable({
  providedIn: 'root'
})
export class CommandeCompaniesFinalService {
  private apiUrl = `http//:localhost:8084/gestionCommande/v1/commandeCompaniesFinal`;

  constructor(private http: HttpClient) {}

  createCommande(commandeDto: CommandeCompaniesFinalDto): Observable<CommandeCompaniesFinalDto> {
    return this.http.post<CommandeCompaniesFinalDto>(`${this.apiUrl}/create`, commandeDto);
  }

  getAllCommandes(): Observable<CommandeCompaniesFinalDto[]> {
    return this.http.get<CommandeCompaniesFinalDto[]>(`${this.apiUrl}/all`);
  }

  getCommandeById(idCommandeFinal: number): Observable<CommandeCompaniesFinalDto> {
    return this.http.get<CommandeCompaniesFinalDto>(`${this.apiUrl}/${idCommandeFinal}`);
  }

  updateCommande(idCommandeFinal: number, commandeDto: CommandeCompaniesFinalDto): Observable<CommandeCompaniesFinalDto> {
    return this.http.put<CommandeCompaniesFinalDto>(`${this.apiUrl}/update/${idCommandeFinal}`, commandeDto);
  }

  deleteCommande(idCommandeFinal: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idCommandeFinal}`);
  }
}
