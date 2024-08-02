import { Injectable } from '@angular/core';
import {CommandeCommpaniesService} from '../../../app/gCmmd-api/src/services/commande-commpanies.service';
import {CommandeCompaniesDto} from '../../../app/gCmmd-api/src/models/commande-companies-dto';
import {Observable, of} from 'rxjs';
import {CommandeSupplierDto} from '../../../app/gCmmd-api/src/models/commande-supplier-dto';
import {CommandeSupplierService} from '../../../app/gCmmd-api/src/services';
// import {UserService} from '../user/user.service';
import {LigneCommandeCompaniesDto} from '../../../app/gCmmd-api/src/models/ligne-commande-companies-dto';
import {LigneCommandeSupplierDto} from '../../../app/gCmmd-api/src/models/ligne-commande-supplier-dto';

@Injectable({
  providedIn: 'root'
})
export class CmdcltfrsService {

  constructor(
    private commandeCommpaniesService: CommandeCommpaniesService,
    private commandeSupplierService: CommandeSupplierService,
    // private userService: UserService
  ) { }

  enregistrerCommandeClient(commandeCompaniesDto: CommandeCompaniesDto): Observable<CommandeCompaniesDto> {
    // commandeClient.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.commandeCommpaniesService.save(commandeCompaniesDto);
  }

  enregistrerCommandeFournisseur(commandeSupplierDto: CommandeSupplierDto): Observable<CommandeSupplierDto> {
    // commandeFournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.commandeSupplierService.save(commandeSupplierDto);
  }

  findAllCommandesClient(): Observable<CommandeCompaniesDto[]> {
    return this.commandeCommpaniesService.findAll();
  }

  findAllCommandesFournisseur(): Observable<CommandeSupplierDto[]> {
    return this.commandeSupplierService.findAll();
  }

  findAllLigneCommandesClient(idCmd?: number): Observable<LigneCommandeCompaniesDto[]> {
    if (idCmd) {
      return this.commandeCommpaniesService.findAllLignesCommandesCompaniesByCommandeCompaniesId(idCmd);
    }
    return of();
  }

  findAllLigneCommandesFournisseur(idCmd?: number): Observable<LigneCommandeSupplierDto[]> {
    if (idCmd) {
      return this.commandeSupplierService.findAllLignesCommandesSupplierByCommandeSupplierId(idCmd);
    }
    return of();
  }
}
