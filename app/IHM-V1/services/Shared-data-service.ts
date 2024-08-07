import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  CommandeCompaniesFinalDto } from '../../gCmmd-api/src/models/commande-companies-final';
import { CommandeCompaniesDto } from '../../gCmmd-api/src/models/commande-companies-dto';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private commandeSubject = new BehaviorSubject<CommandeCompaniesDto | null>(null);
  commande$ = this.commandeSubject.asObservable();

  setCommande(commande: CommandeCompaniesDto): void {
    console.log("commande envoyer",commande)
    this.commandeSubject.next(commande);
  }
}
